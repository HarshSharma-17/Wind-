import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/result.css";

const Result = () => {

    const [activeTab, setActiveTab] = useState("preview");

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

                                    Live Preview

                                </h3>

                                <p>

                                    Your generated UI will appear here.

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

                            <pre>{`export default function App() {

    return (

        <h1>Hello Wind</h1>

    );

}`}</pre>

                        </div>

                    )}

                </div>

            </motion.div>

        </motion.div>

    );

};

export default Result;