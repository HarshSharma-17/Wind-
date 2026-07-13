import {
    Search,
    Bell,
} from "lucide-react";

import Logo from "../../assets/images/logo-circle.png";

import "../../styles/navbar.css";

const Navbar = () => {

    return (

        <header className="navbar">

            <div className="search-box">

                <Search size={18} />

                <input
                    type="text"
                    placeholder="Search projects..."
                />

            </div>

            <div className="navbar-right">

                <button className="notification-btn">

                    <Bell size={20} />

                    <span className="notification-dot"></span>

                </button>

                <div className="profile-box">

                    <div>

                        <p>Welcome Back</p>

                        <h4>Harsh 👋</h4>

                    </div>

                    <img
                        src={Logo}
                        alt="Profile"
                    />

                </div>

            </div>

        </header>

    );

};

export default Navbar;