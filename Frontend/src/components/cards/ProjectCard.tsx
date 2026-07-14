import { motion } from "framer-motion";
import {
  Eye,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import PreviewImage from "../../assets/images/login-bg.png"; // temporary image
import { useState } from "react";

const ProjectCard = () => {
  const [favorite, setFavorite] = useState(false);
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

        <h3>

          Netflix Landing Page

        </h3>

        <p>

          React • Tailwind CSS

        </p>

        <span>

          Last edited 2 hours ago

        </span>

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