import { motion } from "framer-motion";
import {
  User,
  Mail,
  Shield,
  FolderOpen,
  Sparkles,
  LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/profileService";
import "../styles/profile.css";

const Profile = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
  };
  const [user, setUser] = useState({
      name: "",
      email: "",
      created_at: "",
  });
  const [stats] = useState({
      totalProjects: 0,
      totalGenerations: 0,
  });
  
  useEffect(() => {
      const loadProfile = async () => {
          try {
              const data = await getProfile();
              
              console.log("Profile API Response:", data);
              
              setUser({
                  name: data.name || "",
                  email: data.email || "",
                  created_at: data.created_at || "",
              });
          } catch (error) {
              console.error("Profile Error:",error);
          }
      };
  
      loadProfile();
  }, []);
  return (
    <div className="profile-container">
      {/* Hero */}
      <motion.section
        className="profile-hero"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="hero-badge">👤 My Profile</span>

        <h1>Manage Your Account</h1>

        <p>
          View your account information, monitor usage, customize your
          preferences and manage your Wind AI workspace.
        </p>
      </motion.section>

      {/* Top Section */}
      <div className="profile-top-grid">
        {/* Profile Card */}
        <motion.div
          className="profile-card"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
        >
          <div className="profile-avatar">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <h2>{user.name}</h2>

          <p>{user.email}</p>

          

          
        </motion.div>

        {/* Account Details */}
        <motion.div
          className="account-card"
          whileHover={{ y: -6 }}
        >
          <h3>Account Information</h3>

          <div className="info-row">
            <User size={18} />
            <div>
              <span>Name</span>
              <strong>{user.name}</strong>
            </div>
          </div>

          <div className="info-row">
            <Mail size={18} />
            <div>
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>
          </div>

          <div className="info-row">
            <Shield size={18} />
            <div>
              <span>Username</span>
              <strong>@{user.name.toLowerCase().replace(/\s+/g, "")}</strong>
            </div>
          </div>
          <div className="info-row">
              <User size={18} />
              <div>
                  <span>Joined On</span>
                  <strong>
                      {user.created_at
                          ? new Date(user.created_at).toLocaleDateString()
                          : "-"}
                  </strong>
              </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.section
        className="usage-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h3>Your Usage</h3>

        <div className="stats-grid">
          <div className="stat-box">
            <FolderOpen size={28} />
            <h2>{stats.totalProjects}</h2>
            <p>Projects</p>
          </div>

          <div className="stat-box">
            <Sparkles size={28} />
            <h2>{stats.totalGenerations}</h2>
            <p>AI Generations</p>
          </div>

          
        </div>
      </motion.section>

      

      {/* Danger Zone */}
      <motion.section
        className="danger-card"
        whileHover={{ y: -5 }}
      >
        <h3>Danger Zone</h3>

        <p>
          These actions cannot be undone. Please proceed carefully.
        </p>

        <div className="danger-buttons">
          <button
              className="logout-btn"
              onClick={handleLogout}
          >
              <LogOut size={18} />
              Logout
          </button>

        </div>
      </motion.section>
    </div>
  );
};

export default Profile;