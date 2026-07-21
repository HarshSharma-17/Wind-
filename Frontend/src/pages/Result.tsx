import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveProject } from "../api/projectService";
import "../styles/result.css";

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const {
        project,
        historyId,
    } = location.state || {};

    const [activeTab, setActiveTab] = useState("preview");
    const handleSaveProject = async () => {
    
        try {
    
            await saveProject(historyId);
    
            alert("Project saved successfully!");
    
        } catch (error) {
    
            console.error(error);
    
            alert("Failed to save project.");
    
        }
    
    };
    const handleCopy = async () => {
        try {
            const code =
                typeof project === "string"
                    ? project
                    : JSON.stringify(project, null, 2);
    
            await navigator.clipboard.writeText(code);
    
            alert("Code copied successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to copy code.");
        }
    };

    if (!project) {
    
        navigate("/generate");
    
        return null;
    
    }


    return (

        <motion.div
            className="result-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            {/* ================= Header ================= */}

            <div className="result-header">

                <div>

                    <span className="result-badge">

                        🎉 Generation Complete

                    </span>

                    <h1>

                        Your UI is Ready

                    </h1>

                    <p>

                        Wind successfully generated production-ready code
                        from your design.

                    </p>

                </div>

                <div className="result-actions">

                    <button
                        className="secondary-action"
                        onClick={handleSaveProject}
                    >
                    
                        Save Project
                    
                    </button>

                   
                    <button
                        className="primary-action"
                        onClick={handleCopy}
                    >
                        Copy Code
                    </button>

                </div>

            </div>

            {/* ================= Workspace ================= */}

            <motion.div
                className="workspace-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >

                <div className="workspace-tabs">

                    

                    <button
                        className={
                            activeTab === "code"
                                ? "tab-btn active"
                                : "tab-btn"
                        }
                        onClick={() => setActiveTab("code")}
                    >
                        💻 Code
                    </button>

                </div>

                <div className="workspace-body">

                    
                    

                        <div className="code-panel">
                        
                            <div className="code-header">
                        
                                <span>App.tsx</span>
                        
                                <button onClick={handleCopy}>
                                    📋 Copy
                                </button>
                        
                            </div>
                        
                            <pre>
                                {typeof project === "string"
                                    ? project
                                    : JSON.stringify(project, null, 2)}
                            </pre>
                        
                        </div>


                </div>

            </motion.div>

        </motion.div>

    );

};

export default Result;