import { Link } from "react-router-dom";
const HeaderElements=()=>{
    return (
        <div className="headerelementsdiv">
            <ul className="ul">  
                {/* <Link to="/" style={{ textDecoration: 'none' }}><li className="li" style={{color:'black'}}>Home</li></Link> */}
                <Link to="/AboutUs" style={{ textDecoration: 'none' }}><li className="li" style={{color:'black'}}>AboutUs</li></Link>
                <Link to="/ContactUs" style={{ textDecoration: 'none' }}><li className="li" style={{color:'black'}}>ContactUs </li></Link>
                <li className="li" style={{color:'black'}}>Cart</li>
            </ul>
        </div>
    )
}
export default HeaderElements;
