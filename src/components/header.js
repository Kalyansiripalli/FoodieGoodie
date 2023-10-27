
import Logo from "./logo";
import SearchBar from "./searchBar";
import HeaderElements from "./headerElements"
import React, { useState } from "react";
import Button from "./Button";


const Header=({setFilteredProducts=()=>{}})=>{
    const [loggedIn,setLoggedIn]=useState(true);

    // console.log("header component rendered");
    return(
        <div className="header" >
            <Logo />
            <HeaderElements />
            <Button classs={"loginlogout"} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
        </div>
    )
}

export default Header; 