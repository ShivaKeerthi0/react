import { useState } from "react";

const User = (props) =>{


    return (
        <div className="user-card">
            
            <h2>Name : {props?.name}</h2>
            <h2>Email : foodapp@gmail.com</h2>
            <h2>City : Hyderabad</h2>
        </div>
    )
}


export default User;