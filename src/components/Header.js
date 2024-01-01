import { useState } from "react";
import { LOGO } from "../utills/constants";
import { Link } from "react-router-dom";
export const Header = () => {

    const [btnName,setbtnName] =useState("Login");
    return (<div className="header">
        <div className="logo">
            <img src={ LOGO }/>
        </div>
        <div className="navbar">
            <ul className="items">
                <li> <Link to ="/">HOME</Link></li>
                <li><Link to ="/about">About us</Link></li>
                <li><Link to ="/contact">Contatc us</Link></li>
                <li>Cart</li>
                <button onClick = {() => {
                    if(btnName === "Login")
                   setbtnName("log out");
                    else
                    setbtnName("Login");
                    }}>{ btnName}</button>
            </ul>

        </div>
    </div>);
};

