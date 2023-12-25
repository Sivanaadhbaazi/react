import { useState } from "react";
import { LOGO } from "../utills/constants";

export const Header = () => {

    const [btnName,setbtnName] =useState("Login");
    return (<div className="header">
        <div className="logo">
            <img src={ LOGO }/>
        </div>
        <div className="navbar">
            <ul className="items">
                <li>HOME</li>
                <li>About us</li>
                <li>Contatc us</li>
                <li>Cart</li>
                <button onClick = {() => {
                   setbtnName("log out");
                    }}>{ btnName}</button>
            </ul>

        </div>
    </div>);
};

