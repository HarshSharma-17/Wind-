import {
    LayoutDashboard,
    Sparkles,
    FolderOpen,
    History,
    User,
    LogOut,
} from "lucide-react";

import Logo from "../../assets/images/logo-circle.png";

import "../../styles/sidebar.css";

const Sidebar = () => {
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

                    <a
                        className="sidebar-item active"
                        href="/dashboard"
                    >
                        <LayoutDashboard size={20}/>
                        Dashboard
                    </a>

                    <a
                        className="sidebar-item"
                        href="/generate"
                    >
                        <Sparkles size={20}/>
                        Generate
                    </a>

                    <a
                        className="sidebar-item"
                        href="/projects"
                    >
                        <FolderOpen size={20}/>
                        Projects
                    </a>

                    <a
                        className="sidebar-item"
                        href="/history"
                    >
                        <History size={20}/>
                        History
                    </a>

                    <a
                        className="sidebar-item"
                        href="/profile"
                    >
                        <User size={20}/>
                        Profile
                    </a>

                </nav>

            </div>

            <button className="logout-btn">

                <LogOut size={18}/>

                Logout

            </button>

        </aside>
    );
};

export default Sidebar;