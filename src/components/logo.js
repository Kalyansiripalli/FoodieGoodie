import { Link } from "react-router-dom";
import Icon from "../assets/logo.png"
const Logo=()=>{
    // console.log("only logo component rendered");
    return(
        <div className="logodiv">
            <Link to="/" href="/">
                <img className="logo" src={Icon} alt="icon" /> 
            </Link>
        </div>
        
    )
}

export default Logo;