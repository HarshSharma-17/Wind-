import { motion } from "framer-motion";
import {
  Eye,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import { useState } from "react";
import type { Project } from "../../types/project";

import PreviewImage from "../../assets/images/login-bg.png";


interface ProjectCardProps {
  project: Project;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
  const [favorite, setFavorite] = useState(project.favorite);
  return (
    <motion.div
      className="project-card"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <div className="project-image">

        <img
          src={PreviewImage}
          alt="Project"
        />

        <button
            className={favorite ? "favorite-btn active" : "favorite-btn"}
            onClick={() => setFavorite(!favorite)}
        >
            <Star
                size={18}
                fill={favorite ? "#FFD54A" : "none"}
            />
        </button>

      </div>

      <div className="project-body">

        <h3>{project.title}</h3>

        <p>{project.description}</p>
        
        <span>ID : {project.id}</span>

      </div>

      <div className="project-footer">

        <button>

          <Eye size={16} />

          Open

        </button>

        <button>

          <Pencil size={16} />

        </button>

        <button>

          <Trash2 size={16} />

        </button>

      </div>
    </motion.div>
  );
};

export default ProjectCard;