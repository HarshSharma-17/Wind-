import { motion } from "framer-motion";
import { Search, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import "../styles/projects.css";
import ProjectCard from "../components/cards/ProjectCard";
import type { Project } from "../types/project";
import { getProjects } from "../api/projectService";
const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    const [loading, setLoading] = useState(true);
    
    
   
    const loadProjects = async () => {

    try {
    
            const data = await getProjects();
    
            setProjects(data.projects);
    
        }
    
        catch (error) {
    
            console.log(error);
    
        }
    
        finally {
    
            setLoading(false);
    
        }
    
    };
    
    useEffect(() => {
    
        loadProjects();
    
    }, []);
    return (

        <motion.div
            className="projects-page"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:.4 }}
        >

            {/* Header */}

            <div className="projects-header">

                <div>

                    <span className="projects-badge">

                        📁 Projects

                    </span>

                    <h1>

                        My Projects

                    </h1>

                    <p>

                        Manage all your generated UI projects.

                    </p>

                </div>

                <button className="new-project-btn">

                    <Plus size={18}/>

                    New Project

                </button>

            </div>

            {/* Search */}

            <div className="projects-search">

                <Search size={20}/>

                <input
                    placeholder="Search projects..."
                />

            </div>

            {/* Filters */}

            <div className="filter-row">

                <button className="active">

                    All

                </button>

                <button>

                    React

                </button>

                <button>

                    Next.js

                </button>

                <button>

                    Vue

                </button>

                <button>

                    Favorites

                </button>

            </div>

            

            <div className="project-stats">
            
                <motion.div
                    className="stat-box"
                    whileHover={{ y: -5 }}
                >
                    <h2>{projects.length}</h2>
                    <p>Total Projects</p>
                </motion.div>
            
                <motion.div
                    className="stat-box"
                    whileHover={{ y: -5 }}
                >
                    <h2>{
                        projects.filter(
                            (project)=>project.framework==="React"
                        ).length
                    }</h2>
                    <p>React Projects</p>
                </motion.div>
            
                <motion.div
                    className="stat-box"
                    whileHover={{ y: -5 }}
                >
                    <h2>{
                        projects.filter(
                            (project)=>project.favorite
                        ).length
                    }</h2>
                    <p>Favorites</p>
                </motion.div>
            
            </div>
            {/* Cards */}

            <div className="projects-grid">
            
                {loading ? (
                
                    <h2>Loading...</h2>
                
                ) : (
                
                    projects.map((project) => (
                
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                
                    ))
                
                )}
            </div>

            <div className="recent-activity">
            
                <h2>
            
                    Recent Activity
            
                </h2>
            
                <div className="activity-item">
            
                    ✅ Netflix Landing Page updated
            
                    <span>
            
                        5 min ago
            
                    </span>
            
                </div>
            
                <div className="activity-item">
            
                    ⭐ Spotify Dashboard marked as favorite
            
                    <span>
            
                        Today
            
                    </span>
            
                </div>
            
                <div className="activity-item">
            
                    🚀 Tesla UI generated successfully
            
                    <span>
            
                        Yesterday
            
                    </span>
            
                </div>
            
            </div>

        </motion.div>

    );

};

export default Projects;