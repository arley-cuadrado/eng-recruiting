import React from "react";
import bankSquare from "./bankSquare.png";
import dashboard from "./dashboard.svg";
import content from "./content.svg";
import customers from "./customers.svg";

function Menu(){
    return(
        <>
            <aside>

                <div className="logo">
                    <img src={bankSquare} alt="bankSquare" /> <strong>bankSquare</strong>
                </div>

                <article>
                <div className="flex">
                    <div className="option active">
                        <a href=""> <img src={dashboard} /> Dashboard</a>
                    </div>
                    <div className="option">
                        <a href="" className="disabled"> <img src={content} /> Content</a>
                    </div>
                    <div className="option">
                        <a href="" className="disabled"> <img src={customers} /> Customers</a>
                    </div>
                </div>

                <div className="botton">
                    <div className="option">
                        <p>Version 1.0</p>
                    </div>
                </div>
                </article>
            </aside>
        </>
    )
}

export default Menu;

