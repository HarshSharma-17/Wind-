
import Logo from "../../assets/images/logo-circle.png";

import "../../styles/navbar.css";
import { useEffect, useState } from "react";
import { getProfile } from "../../api/profileService";

const Navbar = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
    
        const loadUser = async () => {
    
            try {
    
                const user = await getProfile();
    
                setUserName(user.name);
    
            } catch (error) {
    
                console.error(error);
    
            }
    
        };
    
        loadUser();
    
    }, []);

    return (

        <header className="navbar">

            

            <div className="navbar-right">

                

                <div className="profile-box">

                    <div>

                        <p>Welcome Back</p>

                        <h4>{userName || "User"} 👋</h4>

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