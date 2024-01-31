import {LOGO_URL} from '../utils/constants.js';


const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <img src = {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header