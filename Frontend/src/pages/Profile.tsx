import { motion } from "framer-motion";
import {
  User,
  Mail,
  Shield,
  Settings,
  FolderOpen,
  Sparkles,
  Coins,
  LogOut,
  Trash2,
  Pencil,
} from "lucide-react";

import "../styles/profile.css";

const Profile = () => {
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
            HS
          </div>

          <h2>Harsh Sharma</h2>

          <p>harsh@gmail.com</p>

          <span className="premium-badge">
            ⭐ Premium Member
          </span>

          <button className="primary-btn">
            <Pencil size={18} />
            Edit Profile
          </button>
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
              <strong>Harsh Sharma</strong>
            </div>
          </div>

          <div className="info-row">
            <Mail size={18} />
            <div>
              <span>Email</span>
              <strong>harsh@gmail.com</strong>
            </div>
          </div>

          <div className="info-row">
            <Shield size={18} />
            <div>
              <span>Username</span>
              <strong>@harsh</strong>
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
            <h2>24</h2>
            <p>Projects</p>
          </div>

          <div className="stat-box">
            <Sparkles size={28} />
            <h2>148</h2>
            <p>AI Generations</p>
          </div>

          <div className="stat-box">
            <Coins size={28} />
            <h2>78</h2>
            <p>Credits Left</p>
          </div>
        </div>
      </motion.section>

      {/* Preferences */}
      <motion.section
        className="preferences-card"
        whileHover={{ y: -5 }}
      >
        <h3>
          <Settings size={20} />
          Preferences
        </h3>

        <div className="preference-row">
          <span>Default Framework</span>

          <select>
            <option>React</option>
            <option>Vue</option>
            <option>Next.js</option>
          </select>
        </div>

        <div className="preference-row">
          <span>Design Style</span>

          <select>
            <option>Modern</option>
            <option>Glassmorphism</option>
            <option>Minimal</option>
            <option>Dark</option>
          </select>
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
          <button className="logout-btn">
            <LogOut size={18} />
            Logout
          </button>

          <button className="delete-btn">
            <Trash2 size={18} />
            Delete Account
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Profile;