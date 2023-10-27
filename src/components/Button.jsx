
import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

const Button=({classs,text,setLoggedIn,loggedIn})=>{
    return(
        <>
            {
                classs==='button-3'?
                <div>
                    <button  className={classs} role="button" onClick={()=>{}}>{text}</button>
                </div>:null
            }

            {
                classs==="loginlogout"?
                <div style={{width:"10vh"}}>
                    <button  className={classs} onClick={ () => { setLoggedIn(!loggedIn) } }>{loggedIn ? 'Logout' : 'Login'}</button>
                </div>:null
            }

        </>
        
    )
}

export default Button;

