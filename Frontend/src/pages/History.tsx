import { motion } from "framer-motion";
import { Search, Clock3 } from "lucide-react";
import "../styles/history.css";

const History = () => {
  return (
    <motion.div
      className="history-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}

      <div className="history-header">
        <div>
          <span className="history-badge">🕘 Generation History</span>

          <h1>History</h1>

          <p>
            Browse all of your previously generated UI projects.
          </p>
        </div>
      </div>

      {/* Search */}

      <div className="history-search">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search generations..."
        />

      </div>

      {/* Today */}

      <h2 className="history-section-title">

        Today

      </h2>

      <motion.div

        className="history-card"
        
        initial={{opacity:0,y:20}}
        
        animate={{opacity:1,y:0}}
        
        transition={{duration:.45}}
        
        whileHover={{
        
        y:-6,
        
        scale:1.01
        
        }}
        
        >

        <div className="history-thumbnail">
        
            <img
                src="/preview.png"
                alt="Project Preview"
            />
        
        </div>

        <div className="history-content">

          <h3>

            Landing Page UI

          </h3>

          <p>

            Design a modern SaaS landing page with hero section,
            pricing cards and testimonials.

          </p>

          <div className="history-tags">

            <span>

              React

            </span>

            <span>

              Tailwind

            </span>

            <span>

              Glassmorphism

            </span>

          </div>

        </div>

        <div className="history-actions">

            <span>5 min ago</span>
        
            <div className="action-buttons">
        
                <button className="open-btn">
        
                    👁 Open
        
                </button>
        
                <button className="delete-btn">
        
                    🗑
        
                </button>
        
            </div>
        
        </div>

      </motion.div>
    </motion.div>
  );
};

export default History;