import React from "react";
import profile from "./profile.svg";
import bell from "./bell.png"

function Navbar(){
    return(
        <>
            <div className="flex flex-navbar">
                <div> <img src="" /> Dashboard</div>
                <div className="logo-profile"> <span className="bell"><img src={bell} />  <strong>10</strong> </span> <img src={profile} alt="Profile" /> <strong>Arley Cuadrado</strong></div>
            </div>
        </>
    )
}

export default Navbar;

