import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
} from "lucide-react";
import logo from "../assets/images/logo-circle.png";
import GoogleLogo from "../assets/google.png";
import LoginBg from "../assets/images/login-bg.png";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../api/authService";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [googleHover, setGoogleHover] = useState(false);
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleLogin = async () => {
      try {
        setLoading(true);
    
        const response = await loginUser({
          email,
          password,
        });
    
        localStorage.setItem("token", response.token);
    
        alert(response.message);
    
        navigate("/dashboard");
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          alert(
            error.response?.data?.message ||
              "Login Failed"
          );
        } else {
          alert("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };
  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
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
        <div style={styles.leftSection}>

    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
        <div style={styles.logoCircle}>
    <img
        src={logo}
        alt="Wind Logo"
        style={styles.logoImage}
    />
</div>
    </motion.div>

    <h1 style={styles.logoTitle}>
        Wind
    </h1>

    <p style={styles.logoSubtitle}>
        Turn UI Designs Into
        <br />
        Production Ready Code
    </p>

    

</div>
        <div style={styles.rightSection}>

    <div style={styles.formContainer}>

        <h1 style={styles.heading}>
            Welcome Back
        </h1>

        <p style={styles.subHeading}>
            Sign in to continue building amazing UI with Wind.
        </p>

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
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

    </div>

</div>

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
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            style={styles.passwordInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button
            type="button"
            style={styles.eyeButton}
            onClick={() => setShowPassword(!showPassword)}
        >
            {showPassword ? (
                <EyeOff size={18} />
            ) : (
                <Eye size={18} />
            )}
        </button>

    </div>

</div>

        <motion.button
            onClick={handleLogin}
            disabled={loading}
            style={styles.loginButton}
            whileHover={{
                scale:1.02,
                y:-2,
            }}
            whileTap={{
                scale:.98,
            }}
        >
            {loading ? "Logging in..." : "Login"}
        </motion.button>

        <div style={styles.divider}>

            <span style={styles.dividerText}>

                OR

            </span>

        </div>

        <button
            style={{
                ...styles.googleButton,
                transform: googleHover ? "translateY(-2px)" : "translateY(0)",
                boxShadow: googleHover
                    ? "0 18px 35px rgba(92,140,255,.18)"
                    : "0 8px 18px rgba(0,0,0,.05)",
            }}
            onMouseEnter={() => setGoogleHover(true)}
            onMouseLeave={() => setGoogleHover(false)}
        >
            <img
                src={GoogleLogo}
                alt="Google"
                style={{
                    width: 22,
                    height: 22,
                }}
            />
        
            Continue with Google
        </button>

        <p style={styles.signupText}>
            Don't have an account?
        
            <span
                style={styles.signupLink}
                onClick={() => navigate("/signup")}
            >
                {" "}Sign Up
            </span>
        </p>

    </div>

</div>
      </motion.div>
    </motion.div>
  );
};

export default Login;

const styles: Record<string, CSSProperties> = {
container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",

    backgroundImage: `url(${LoginBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
},

blurTop:{
    position:"absolute",
    width:500,
    height:500,
    background:"#8FD8FF",
    filter:"blur(130px)",
    top:-180,
    left:-180,
    opacity:.45
},

blurBottom:{
    position:"absolute",
    width:420,
    height:420,
    background:"#D7F4FF",
    filter:"blur(130px)",
    bottom:-120,
    right:-120
},

circleOne:{
    position:"absolute",
    width:700,
    height:700,
    borderRadius:"50%",
    border:"1px solid rgba(255,255,255,.45)",
    left:"50%",
    top:"55%",
    transform:"translate(-50%,-50%)"
},

circleTwo:{
    position:"absolute",
    width:900,
    height:900,
    borderRadius:"50%",
    border:"1px solid rgba(255,255,255,.25)",
    left:"50%",
    top:"55%",
    transform:"translate(-50%,-50%)"
},

card:{
    width:920,
    height:630,
    background:"rgba(255,255,255,.72)",
    backdropFilter:"blur(24px)",
    border:"1px solid rgba(255,255,255,.65)",
    borderRadius:60,
    display:"flex",
    overflow:"hidden",
    boxShadow:"0 30px 80px rgba(84,120,180,.18)",
    position:"relative",
    zIndex:2
},

leftSection:{
    width:"38%",
    background:"linear-gradient(160deg,#5C8CFF,#89D8FF)",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    color:"#fff",
    padding:"40px",
    textAlign:"center",
},
logoImage:{
    width:145,
    height:145,
    objectFit:"contain",
    borderRadius:"100%",
},
logoCircle:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:40,
},



logoTitle:{
    fontSize:48,
    fontWeight:700,
    color:"#fff",
    marginTop:10,
    marginBottom:18
},

logoSubtitle:{
    color:"rgba(255,255,255,.92)",
    fontSize:18,
    textAlign:"center",
    lineHeight:"30px",
    marginBottom:40
},


rightSection:{
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
},
formContainer:{
    width:"78%",
    paddingTop:28,
},

heading:{
    fontSize:34,
    color:"#17324D",
    fontWeight:700,
    marginBottom:10
},

subHeading:{
    color:"#70839A",
    marginBottom:35,
    fontSize:15
},

inputGroup:{
    display:"flex",
    flexDirection:"column",
    marginBottom:20
},
inputWrapper:{
    display:"flex",
    alignItems:"center",
    background:"#fff",
    borderRadius:18,
    border:"1px solid #DCE9FF",
    height:56,
    padding:"0 18px",
},

inputIcon:{
    marginRight:12,
},

passwordInput:{
    flex:1,
    border:"none",
    outline:"none",
    fontSize:15,
    background:"transparent",
},

eyeButton:{
    border:"none",
    background:"transparent",
    cursor:"pointer",
    display:"flex",
    alignItems:"center",
    color:"#6B7E95",
},
label:{
    marginBottom:8,
    color:"#17324D",
    fontWeight:600,
    fontSize:14
},

input:{
    flex:1,
    border:"none",
    outline:"none",
    background:"transparent",
    fontSize:15,
},

optionsRow:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:28
},

remember:{
    display:"flex",
    alignItems:"center",
    gap:8,
    fontSize:14,
    color:"#5B6B80"
},

forgotButton:{
    background:"transparent",
    color:"#5C8CFF",
    fontWeight:600,
    fontSize:14
},

loginButton:{
    width:"100%",
    height:56,
    borderRadius:18,
    border:"none",
    cursor:"pointer",
    color:"#fff",
    fontWeight:700,
    fontSize:16,
    background:"linear-gradient(135deg,#5C8CFF,#89D8FF)",
    boxShadow:"0 18px 35px rgba(92,140,255,.28)",
    transition:"0.3s",
    
},

divider:{
    display:"flex",
    justifyContent:"center",
    margin:"28px 0"
},

dividerText:{
    color:"#94A4B8",
    fontSize:14
},

googleButton:{
    width:"100%",
    height:56,
    borderRadius:18,
    background:"#fff",
    border:"1px solid #DCE9FF",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    color:"#17324D",
    fontWeight:600,
    fontSize:15,
    cursor:"pointer",
    transition:"all .25s ease",
},

signupText:{
    marginTop:28,
    textAlign:"center",
    color:"#6C7C93",
    fontSize:15
},

signupLink:{
    color:"#5C8CFF",
    fontWeight:700,
    cursor:"pointer"
}
};