import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
} from "lucide-react";
import axios from "axios";
import Logo from "../assets/images/logo-circle.png";
import GoogleLogo from "../assets/google.png";
import SignupBg from "../assets/images/signup-bg.png";

import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authService";
const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [googleHover, setGoogleHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const passwordStrength = () => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  const passwordMatch =
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const handleSignup = async () => {
  
      if (!fullName || !email || !password || !confirmPassword) {
  
          alert("Please fill all fields");
  
          return;
  
      }
  
      if (password !== confirmPassword) {
  
          alert("Passwords do not match");
  
          return;
  
      }
  
      try {
  
          setLoading(true);
  
          const response = await registerUser({
  
              name: fullName,
  
              email,
  
              password,
  
          });
  
          alert(response.message);
  
          navigate("/login");
  
      } 
      catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    alert(error.response?.data?.message || "Signup Failed");
  } else {
    alert("Something went wrong");
  }
}
      

      finally {
  
          setLoading(false);
  
      }
  
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div style={styles.blurTop}></div>
      <div style={styles.blurBottom}></div>

      <div style={styles.circleOne}></div>
      <div style={styles.circleTwo}></div>

      <motion.div
        style={styles.card}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT PANEL */}

        <div style={styles.leftSection}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={styles.logoCircle}>
              <img
                src={Logo}
                alt="Wind Logo"
                style={styles.logoImage}
              />
            </div>
          </motion.div>

          <h1 style={styles.logoTitle}>
            Wind
          </h1>

          <p style={styles.logoSubtitle}>
            Create Beautiful UI
            <br />
            With AI In Seconds
          </p>
        </div>

        {/* RIGHT PANEL */}

        <div style={styles.rightSection}>
          <div style={styles.formContainer}>

            <h1 style={styles.heading}>
              Create Account
            </h1>

            <p style={styles.subHeading}>
              Join Wind and start building
              faster with AI.
            </p>

            {/* FULL NAME */}

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Full Name
              </label>

              <div style={styles.inputWrapper}>
                <User
                  size={18}
                  color="#7C8DA5"
                  style={styles.inputIcon}
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  style={styles.input}
                />
              </div>
            </div>

            {/* EMAIL */}

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Email Address
              </label>

              <div style={styles.inputWrapper}>
                <Mail
                  size={18}
                  color="#7C8DA5"
                  style={styles.inputIcon}
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  style={styles.input}
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Password
              </label>

              <div style={styles.inputWrapper}>
                <Lock
                  size={18}
                  color="#7C8DA5"
                  style={styles.inputIcon}
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  style={styles.passwordInput}
                />

                <button
                  type="button"
                  style={styles.eyeButton}
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <p style={styles.strengthText}>
                Password Strength :
                <span style={styles.strengthValue}>
                  {" "}
                  {passwordStrength()}
                </span>
              </p>
            </div>
                        {/* CONFIRM PASSWORD */}

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Confirm Password
              </label>

              <div style={styles.inputWrapper}>
                <Lock
                  size={18}
                  color="#7C8DA5"
                  style={styles.inputIcon}
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  style={styles.passwordInput}
                />

                <button
                  type="button"
                  style={styles.eyeButton}
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <div style={styles.matchRow}>
                {confirmPassword.length > 0 &&
                  (passwordMatch ? (
                    <>
                      <CheckCircle
                        size={16}
                        color="#22C55E"
                      />
                      <span style={styles.matchSuccess}>
                        Passwords Match
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle
                        size={16}
                        color="#EF4444"
                      />
                      <span style={styles.matchError}>
                        Passwords Don't Match
                      </span>
                    </>
                  ))}
              </div>
            </div>

            <button style={styles.loginButton}
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>


            <div style={styles.divider}>
              <span style={styles.dividerText}>
                OR
              </span>
            </div>

            <button
              style={{
                ...styles.googleButton,
                ...(googleHover
                  ? styles.googleButtonHover
                  : {}),
              }}
              onMouseEnter={() =>
                setGoogleHover(true)
              }
              onMouseLeave={() =>
                setGoogleHover(false)
              }
            >
              <img
                src={GoogleLogo}
                alt="Google"
                style={styles.googleLogo}
              />

              Continue with Google
            </button>

            <p style={styles.signupText}>
              Already have an account?
            
              <span
                style={styles.signupLink}
                onClick={() => navigate("/login")}
              >
                {" "}Login
              </span>
            </p>

          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Signup;

const styles: Record<string, CSSProperties> = {
container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",

    backgroundImage: `url(${SignupBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
},

blurTop: {
  position: "absolute",
  width: 500,
  height: 500,
  background: "#8FD8FF",
  filter: "blur(130px)",
  top: -180,
  left: -180,
  opacity: 0.45,
},

blurBottom: {
  position: "absolute",
  width: 420,
  height: 420,
  background: "#D7F4FF",
  filter: "blur(130px)",
  bottom: -120,
  right: -120,
},

circleOne: {
  position: "absolute",
  width: 700,
  height: 700,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,.45)",
  left: "50%",
  top: "55%",
  transform: "translate(-50%,-50%)",
},

circleTwo: {
  position: "absolute",
  width: 900,
  height: 900,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,.25)",
  left: "50%",
  top: "55%",
  transform: "translate(-50%,-50%)",
},

card: {
  width: 900,
  minHeight: 525,
  background: "rgba(255,255,255,.72)",
  backdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,.65)",
  borderRadius: 60,
  display: "flex",
  overflow: "hidden",
  boxShadow: "0 30px 80px rgba(84,120,180,.18)",
  position: "relative",
  zIndex: 2,
},

leftSection: {
  width: "38%",
  background:
    "linear-gradient(160deg,#5C8CFF,#89D8FF)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
},

logoCircle: {
  width: 90,
  height: 90,
  borderRadius: "50%",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 26,
},

logoImage: {
  width: 60,
  height: 60,
  objectFit: "contain",
},

logoTitle: {
  fontSize: 34,
  fontWeight: 700,
  color: "#fff",
  marginBottom: 20,
},

logoSubtitle: {
  color: "rgba(255,255,255,.95)",
  fontSize: 15,
  lineHeight: "24px",
  textAlign: "center",
},

rightSection: {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},

formContainer: {
  width: "80%",
  paddingTop: 12,
  paddingBottom: 12,
},

heading: {
  fontSize: 34,
  color: "#17324D",
  fontWeight: 700,
  marginBottom: 10,
},

subHeading: {
  color: "#70839A",
  fontSize: 16,
  marginBottom: 12,
},

inputGroup: {
  display: "flex",
  flexDirection: "column",
  marginBottom: 10,
},

label: {
  marginBottom: 10,
  color: "#17324D",
  fontWeight: 600,
  fontSize: 14,
},

inputWrapper: {
  display: "flex",
  alignItems: "center",
  height: 52,
  background: "#fff",
  border: "1px solid #DCE9FF",
  borderRadius: 18,
  padding: "0 18px",
},

inputIcon: {
  marginRight: 12,
},

input: {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: 15,
},

passwordInput: {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: 15,
},

eyeButton: {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  color: "#6B7E95",
},
strengthText: {
  marginTop: 10,
  color: "#70839A",
  fontSize: 13,
},

strengthValue: {
  color: "#5C8CFF",
  fontWeight: 700,
},

matchRow: {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginTop: 10,
  minHeight: 18,
},

matchSuccess: {
  color: "#22C55E",
  fontSize: 13,
  fontWeight: 600,
},

matchError: {
  color: "#EF4444",
  fontSize: 13,
  fontWeight: 600,
},

loginButton: {
  width: "100%",
  height: 48,
  borderRadius: 18,
  border: "none",
  cursor: "pointer",
  color: "#fff",
  fontWeight: 700,
  fontSize: 16,
  background:
    "linear-gradient(135deg,#5C8CFF,#89D8FF)",
  boxShadow:
    "0 18px 35px rgba(92,140,255,.28)",
  transition: "all .3s ease",
  marginTop: -5,
},

divider: {
  display: "flex",
  justifyContent: "center",
  margin: "8px 0",
},

dividerText: {
  color: "#94A4B8",
  fontSize: 14,
},

googleButton: {
  width: "100%",
  height: 48,
  borderRadius: 18,
  background: "#fff",
  border: "1px solid #DCE9FF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  color: "#17324D",
  fontWeight: 600,
  fontSize: 15,
  cursor: "pointer",
  transition: "all .25s ease",
},

googleButtonHover: {
  transform: "translateY(-2px)",
  boxShadow:
    "0 18px 35px rgba(92,140,255,.18)",
},

googleLogo: {
  width: 22,
  height: 22,
  objectFit: "contain",
},

signupText: {
  marginTop: 12,
  marginBottom: 8,
  textAlign: "center",
  color: "#6C7C93",
  fontSize: 15,
},

signupLink: {
  color: "#5C8CFF",
  fontWeight: 700,
  cursor: "pointer",
},

};