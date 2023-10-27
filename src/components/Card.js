import { Link } from "react-router-dom"
import {image_url} from "../constants"
import Button from "./Button";
const Card = ({classs,ImageLink,title,cuisines,price,id,name,link}) => {
    // need to take the contents to be displayed (use case : for displaying resturant detalis , dish details)
    // need to take the the styling also (take the className as input any write the className based styles inside css file problem solved)
  return (
    
    <>
    {
        classs==="card"?<div className={classs}>
            <Link to={"/DetailedView/"+id}><img src={image_url+ImageLink} alt="rest-img" className='card-image' /></Link>
        
            <Link to={"/DetailedView/"+id} style={{ textDecoration: 'none' }}>
                <div className='info' >
                    <h4 className='title'>{title}</h4>
                    <p className='Price'style={{color:"#787878"}}>{price}</p>
                    <p className="cusines">{cuisines.join(',')}</p>
                </div>
            </Link>
        </div>:null
    }
    {
        classs==="dish"?<div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",  backgroundColor:"white" , width:"80%",margin:"auto",marginTop:"2vh", borderRadius:"5px" } }>
        <div style={{width:"100px",height:"100px",paddingTop:"15px",paddingBottom:"15px"}}>
            {
                link===image_url?<img style={{width:"100%",height:"100%",borderRadius:"10px"}} src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc=" alt="" />:<img style={{width:"100%",height:"70%",borderRadius:"10px"}} src={link} alt="" />
            }  
        </div>
        <div style={{width:"200px",height:"100px"}}>
            <h3 className="dishname">{name}</h3>
            <p>₹ {(+price)/100}</p>
            <Button classs={"button-3"} text={"Add"} /> 
        </div>   
        </div>:null
    }
    </>
  )
}

export default Card