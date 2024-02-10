import {LOGO_URL, APP_URL} from '../utils/constants.js';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';


const Header = () => {

    const [Button, setButton] = useState("Login");
    const [backgroundColor , setBackgroundColor] = useState("green")

    const set = (button)=>{

        if(button.toLowerCase() === 'login'){
            setButton('Logout');
            setBackgroundColor('red');
        }else{
            setButton('Login');
            setBackgroundColor('green');
        }
        
    }

    return (
        <div className="header">
            <div className="logo">
                
                <Link className="image-link-router"to="."><img src = {LOGO_URL}/></Link>
            </div>
            <div className="nav-items">
                <ul> 
                    <li>Online Status : {!useOnlineStatus() ? "Offline" : "Online"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
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