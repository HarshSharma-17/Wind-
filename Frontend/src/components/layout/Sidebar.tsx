import {
    LayoutDashboard,
    Sparkles,
    FolderOpen,
    History,
    User,
    LogOut,
} from "lucide-react";

import Logo from "../../assets/images/logo-circle.png";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/sidebar.css";

const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <aside className="sidebar">

            <div>

                <div className="sidebar-logo">

                    <img
                        src={Logo}
                        alt="Wind"
                    />

                    <div>
                        <h2>Wind</h2>
                        <span>AI UI Generator</span>
                    </div>

                </div>

                <nav className="sidebar-menu">

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >
                        <LayoutDashboard size={20} />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/generate"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >
                        <Sparkles size={20} />
                        Generate
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >
                        <FolderOpen size={20} />
                        Projects
                    </NavLink>

                    <NavLink
                        to="/history"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >
                        <History size={20} />
                        History
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-item active"
                                : "sidebar-item"
                        }
                    >
                        <User size={20} />
                        Profile
                    </NavLink>

                </nav>

            </div>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                <LogOut size={18} />
                Logout
            </button>

        </aside>
    );
};

export default Sidebar;