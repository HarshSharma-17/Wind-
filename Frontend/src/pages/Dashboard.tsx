import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
import HeroIllustration from "../assets/images/hero-illustration.png";
import { useEffect, useState } from "react";
import { getDashboardData } from "../api/dashboardService";
import StatsSection from "../components/dashboard/StatsSection";
import RecentSection from "../components/dashboard/RecentSection";
const Dashboard = () => {

    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState({
        totalProjects: 0,
        totalGenerations: 0,
        latestProject: null,
        latestGeneration: null,
    });
    
    useEffect(() => {
        const loadDashboard = async () => {
            try {
                const data = await getDashboardData();
                setDashboardData(data);
            } catch (error) {
                console.error("Failed to load dashboard:", error);
            }
        };
    
        loadDashboard();
    }, []);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useSpring(mouseY,{
        stiffness:120,
        damping:20
    });
    
    const rotateY = useSpring(mouseX,{
        stiffness:120,
        damping:20
    });
    
    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
    
        const rect = e.currentTarget.getBoundingClientRect();
    
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        const rotateYValue =
            ((x / rect.width) - 0.5) * 14;
        
        const rotateXValue =
            ((y / rect.height) - 0.5) * -14;
    
        mouseX.set(rotateYValue);
        mouseY.set(rotateXValue);
    
    };
    
    const handleMouseLeave = () => {
    
        mouseX.set(0);
        mouseY.set(0);
    
    };
    return (
        <div className="dashboard">

            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="dashboard-body">

                    <section className="hero">
                    
                        <div className="hero-left">
                    
                            <span className="hero-badge">
                                ✨ AI Powered UI Generator
                            </span>
                    
                            <h1>
                                Transform Your UI Into
                                <br />
                                Production Ready Code
                            </h1>
                    
                            <p>
                                Upload a design, describe your idea,
                                and let Wind generate beautiful React,
                                TypeScript and Tailwind code in seconds.
                            </p>
                    
                            <div className="hero-buttons">
                    
                                <button
                                    className="primary-btn"
                                    onClick={() => navigate("/generate")}
                                >
                                    Generate UI
                                </button>
                    
                                <button
                                    className="secondary-btn"
                                    onClick={() => navigate("/projects")}
                                >
                                    View Projects
                                </button>
                    
                            </div>
                    
                        </div>
                    
                        <div 
                           className="hero-right"
                           onMouseMove={handleMouseMove}
                           onMouseLeave={handleMouseLeave}
                           >
                    
                            <motion.img
                                src={HeroIllustration}
                                alt="Wind"
                            
                                className="hero-illustration"
                            
                                style={{
                                    rotateX,
                                    rotateY,
                                    x: mouseX,
                                    y: mouseY,
                                }}
                            
                                animate={{
                                    y:[0,-12,0]
                                }}
                            
                                transition={{
                                    y:{
                                        duration:5,
                                        repeat:Infinity,
                                        ease:"easeInOut"
                                    }
                                }}
                            />
                        
                        </div>
                    
                    </section>
                    <StatsSection
                        totalProjects={dashboardData.totalProjects}
                        totalGenerations={dashboardData.totalGenerations}
                    />
                    
                    <RecentSection
                        latestProject={dashboardData.latestProject}
                        latestGeneration={dashboardData.latestGeneration}
                    />

                </div>

            </div>

        </div>
    );
};

export default Dashboard;