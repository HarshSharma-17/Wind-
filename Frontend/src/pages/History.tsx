import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/history.css";

import {
    getHistory,
    deleteHistory,
} from "../api/generateService";

import type { HistoryItem } from "../types/history";

const History = () => {

    const navigate = useNavigate();

    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const loadHistory = async () => {

        try {

            const response = await getHistory();

            setHistory(response.history);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadHistory();

    }, []);

    const handleDelete = async (id: number) => {

        try {

            await deleteHistory(id);

            setHistory((prev) =>
                prev.filter((item) => item.id !== id)
            );

        } catch (error) {

            console.error(error);

        }

    };

    const filteredHistory = useMemo(() => {

        return history.filter((item) =>

            item.prompt
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [history, search]);

    return (

        <motion.div
            className="history-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .4 }}
        >

            <div className="history-header">

                <div>

                    <span className="history-badge">

                        🕘 Generation History

                    </span>

                    <h1>

                        History

                    </h1>

                    <p>

                        Browse all of your previously generated UI projects.

                    </p>

                </div>

            </div>

            <div className="history-search">

                <Search size={20} />

                <input
                    type="text"
                    placeholder="Search generations..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            <h2 className="history-section-title">

                All Generations

            </h2>

            {loading ? (

                <p>Loading...</p>

            ) : filteredHistory.length === 0 ? (

                <p>No generations found.</p>

            ) : (

                filteredHistory.map((item) => (

                    <motion.div

                        key={item.id}

                        className="history-card"

                        initial={{ opacity: 0, y: 20 }}

                        animate={{ opacity: 1, y: 0 }}

                        whileHover={{
                            y: -6,
                            scale: 1.01,
                        }}

                    >

                        <div className="history-thumbnail">

                            <img
                                src="/preview.png"
                                alt="Preview"
                            />

                        </div>

                        <div className="history-content">

                            <h3>

                                {item.prompt}

                            </h3>

                            <p>

                                Generated using {item.framework}

                            </p>

                            <div className="history-tags">

                                <span>

                                    {item.framework}

                                </span>

                                <span>

                                    {item.style}

                                </span>

                            </div>

                        </div>

                        <div className="history-actions">

                            <span>

                                {new Date(
                                    item.created_at
                                ).toLocaleString()}

                            </span>

                            <div className="action-buttons">

                                <button
                                    className="open-btn"
                                    onClick={() =>
                                        navigate("/result", {

                                            state: {

                                                project:
                                                    JSON.parse(
                                                        item.generated_code
                                                    ),

                                                prompt:
                                                    item.prompt,

                                                framework:
                                                    item.framework,

                                                style:
                                                    item.style,

                                            },

                                        })
                                    }
                                >

                                    👁 Open

                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        handleDelete(item.id)
                                    }
                                >

                                    🗑

                                </button>

                            </div>

                        </div>

                    </motion.div>

                ))

            )}

        </motion.div>

    );

};

export default History;