import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/result.css";

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const {
        project,
        prompt,
        framework,
        style,
    } = location.state || {};

    const [activeTab, setActiveTab] = useState("preview");

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

                    <button className="secondary-action">

                        Save Project

                    </button>

                    <button className="secondary-action">

                        Download ZIP

                    </button>

                    <button className="primary-action">

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
                            activeTab === "preview"
                                ? "tab-btn active"
                                : "tab-btn"
                        }
                        onClick={() => setActiveTab("preview")}
                    >
                        🖥 Preview
                    </button>

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

                    {activeTab === "preview" ? (

                        <div className="preview-panel">

                            <div className="preview-window">

                                <h3>

                                    Prompt
                                
                                </h3>
                                
                                <p>
                                
                                    {prompt}
                                
                                </p>
                                
                                <hr />
                                
                                <p>
                                
                                    <strong>Framework:</strong> {framework}
                                
                                </p>
                                
                                <p>
                                
                                    <strong>Style:</strong> {style}
                                
                                </p>

                            </div>

                        </div>

                    ) : (

                        <div className="code-panel">

                            <div className="code-header">

                                <span>

                                    App.tsx

                                </span>

                                <button>

                                    📋 Copy

                                </button>

                            </div>

                            <pre>

                            {
                            
                            typeof project === "string"
                            
                            ? project
                            
                            : JSON.stringify(project, null, 2)
                            
                            }
                            
                            </pre>

                        </div>

                    )}

                </div>

            </motion.div>

        </motion.div>

    );

};

export default Result;