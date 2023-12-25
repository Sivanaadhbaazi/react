import { LOGO } from "../utills/constants";

export const Header = () => {

    let btnName ="Login"
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
                    btnName = "shivaa";
                    console.log(btnName);
                    }}>{ btnName}</button>
            </ul>

        </div>
    </div>);
};

