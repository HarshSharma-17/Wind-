import { motion } from "framer-motion";
import { Upload, ImagePlus, X } from "lucide-react";
import { useRef, useState } from "react";
import "../styles/generate.css";

const Generate = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [preview, setPreview] = useState<string | null>(null);
    const [prompt, setPrompt] = useState("");
    const [framework, setFramework] = useState("React + Tailwind");
    const [theme, setTheme] = useState("Glass");
    const handleImage = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0];

        if(!file) return;

        setPreview(URL.createObjectURL(file));

    };

    return (
        <div className="generate-container">
            <motion.div
                className="upload-card"
                whileHover={{ y:-5 }}
            >
            
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImage}
                />
            
                {
            
                    preview ? (
            
                        <div className="preview-container">
            
                            <img
                                src={preview}
                                alt="Preview"
                                className="preview-image"
                            />
            
                            <button
                                className="remove-btn"
                                onClick={() => setPreview(null)}
                            >
            
                                <X size={18}/>
            
                            </button>
            
                        </div>
            
                    ) : (
            
                        <>
            
                            <ImagePlus
                                size={58}
                                color="#5C8CFF"
                            />
            
                            <h2>
            
                                Drag & Drop UI Screenshot
            
                            </h2>
            
                            <p>
            
                                PNG • JPG • JPEG
            
                                <br/>
            
                                Maximum size 10 MB
            
                            </p>
            
                            <button
                                className="upload-btn"
                                onClick={() => inputRef.current?.click()}
                            >
            
                                <Upload size={18}/>
            
                                Upload Image
            
                            </button>
            
                        </>
            
                    )
            
                }
            </motion.div>
        
            <motion.div
            
                className="prompt-card"
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:.5 }}
            >
            
                <div className="section-title">
            
                    <h2>
            
                        Describe Your UI
            
                    </h2>
            
                    <span>
            
                        {prompt.length}/500
            
                    </span>
            
                </div>
            
                <textarea
            
                    value={prompt}
            
                    onChange={(e)=>setPrompt(e.target.value)}
            
                    maxLength={500}
            
                    placeholder="Example:
            
            Design a modern fintech dashboard with analytics cards, sidebar navigation, charts, glassmorphism, responsive layout and blue gradient theme."
            
                />
            
            </motion.div>
            <motion.div
                className="framework-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>Choose Framework</h2>
            
                <div className="framework-grid">
            
                    {[
                        "React + Tailwind",
                        "React + CSS",
                        "Next.js",
                        "Vue",
                        "HTML/CSS",
                    ].map((item) => (
            
                        <button
                            key={item}
                            className={
                                framework === item
                                    ? "framework-btn active"
                                    : "framework-btn"
                            }
                            onClick={() => setFramework(item)}
                        >
                            {item}
                        </button>
            
                    ))}
            
                </div>
            </motion.div>
            <motion.div
                className="theme-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            
                <h2>Choose Theme</h2>
            
                <div className="theme-grid">
            
                    {[
                        {
                            icon:"☀️",
                            name:"Light"
                        },
                        {
                            icon:"🌙",
                            name:"Dark"
                        },
                        {
                            icon:"✨",
                            name:"Glass"
                        },
                        {
                            icon:"🎨",
                            name:"Gradient"
                        },
                        {
                            icon:"⚡",
                            name:"Minimal"
                        }
            
                    ].map((item)=>(
            
                        <button
                            key={item.name}
                            className={
                                theme===item.name
                                ? "theme-btn active"
                                : "theme-btn"
                            }
                            onClick={()=>setTheme(item.name)}
                        >
            
                            <span>{item.icon}</span>
            
                            <p>{item.name}</p>
            
                        </button>
            
                    ))}
            
                </div>
            
            </motion.div>
            <motion.div
                className="generate-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            
                <div className="generate-content">
            
                    <div>
            
                        <span className="generate-badge">
                            🚀 Ready to Generate
                        </span>
            
                        <h2>
                            Transform Your Design Into Production Ready Code
                        </h2>
            
                        <p>
                            Wind AI will analyze your UI screenshot, understand the layout,
                            and generate clean React code based on your selected framework
                            and design style.
                        </p>
            
                    </div>
            
                    <button className="generate-btn">
                        ⚡ Generate UI
                    </button>
            
                </div>
            
            </motion.div>
        </div>
    );

};
export default Generate;