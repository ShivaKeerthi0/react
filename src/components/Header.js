import {LOGO_URL, APP_URL} from '../utils/constants.js';
import { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus.js';
import { useContext } from 'react';
import userContext from '../utils/UserContext';
import {useSelector} from 'react-redux'




const Header = () => {

    const [Button, setButton] = useState("Login");
    const [backgroundColor , setBackgroundColor] = useState("green");
    const data = useContext(userContext);

    const data_items = useSelector((store)=> store.cart.items );


    console.log("user context is : " + data)

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
        <div className="flex justify-between border border-solid border-black border-1 margin m-1 bg-yellow-50 shadow-2xl">
            <div className="w-24">
                <Link  to="."><img  className="w-20" src= {LOGO_URL}/></Link>
            </div>
            <div className="padding p-4">
                <ul className='flex items-center'> 
                    <li className="padding px-5">Online Status : {!useOnlineStatus() ? "Offline" : "Online"}</li>
                    <li className="padding px-5 hover:cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="padding px-5 hover:cursor-pointer"><Link to="/about">About Us</Link></li>
                    <li className="padding px-5 hover:cursor-pointer"><Link to="/contact">Contact Us</Link></li>
                    <li className="padding px-5 hover:cursor-pointer"><Link to="/grocery">Grocery</Link></li>
                    <li className="padding px-5 hover:cursor-pointer"><Link to= '/cart'>Cart ( {data_items.length} Items )</Link></li>
                    <li className="padding px-5">
                        {
                            data.loggedUser
                        }
                    </li>
                    <button className="padding p-2 w-20" style={{'backgroundColor':backgroundColor}}
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