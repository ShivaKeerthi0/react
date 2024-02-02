import {LOGO_URL} from '../utils/constants.js';
import { useState } from 'react';


const Header = () => {

    const [Button, setButton] = useState("Login");
    const [backgroundColor , setBackgroundColor] = useState("green")

    const set = (button)=>{

        if(button.toLowerCase() === 'login'){
            setButton('Logiut');
            setBackgroundColor('red');
        }else{
            setButton('Login');
            setBackgroundColor('green');
        }
        
    }

    return (
        <div className="header">
            <div className="logo">
                <img src = {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" style={{'backgroundColor':backgroundColor}}
                    onClick={()=>{
                        Button === 'Login' ? set(Button) : set(Button);

                        console.log(Button);
                    }} >{Button}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header