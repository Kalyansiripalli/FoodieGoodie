import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ARRAY_OF_MENU_OF_RESTAURANTS} from "../constants";
import { image_url } from "../constants";
import Card from "./Card";
import {getRestrauntDetailsById} from "../constants"
import SearchBar from "./searchBar";



const DetailedView = () => {
    const {id}=useParams();
    const ind=getRestrauntDetailsById[id];
    const[Menu,setMenu]=useState(ARRAY_OF_MENU_OF_RESTAURANTS[ind]?.data?.menu.items);
    const[VegOnly,setVegOnly]=useState(false);
    useEffect(()=>{
        if(VegOnly){
            const keys=Object.keys(Menu)
            let arr=[];
            keys.map((key)=>{
                if(Menu[key].attributes.vegClassifier==='VEG')
                    arr.push(Menu[key])
        
            })
    
            setMenu(arr);
        }
        else{
            setMenu(ARRAY_OF_MENU_OF_RESTAURANTS[ind]?.data?.menu.items);
        }
    },[VegOnly]);
    

    
    return(
        <div key={id}>
            
            <div style={{display:"flex",flexDirection:"row",backgroundColor:"#233142",alignItems:"center",marginTop:"4vh",marginLeft:"auto",marginRight:"auto",borderRadius:"5px",width:"90%"}}>
                <div style={{width:"60vw"}}>
                    <img style={{width:"30vw",height:"250px",marginLeft:"10vw",marginRight:"10vh",marginTop:"5vh",marginBottom:"5vh",borderRadius:"5px"}} src={image_url+ARRAY_OF_MENU_OF_RESTAURANTS[ind]?.data?.cloudinaryImageId} alt="" />
                </div>
                <div style={{width:"40vw"}}>
                    <h1 style={{color:"white"}}>{ARRAY_OF_MENU_OF_RESTAURANTS[ind].data.name}</h1>
                    <h3 style={{color:"white"}}>⭐{ARRAY_OF_MENU_OF_RESTAURANTS[ind].data.avgRating}</h3>
                    <p style={{color:"white"}}>👲{ARRAY_OF_MENU_OF_RESTAURANTS[ind]?.data?.totalRatingsString}</p>
                    <p style={{color:"white"}}>💵{ARRAY_OF_MENU_OF_RESTAURANTS[ind]?.data?.costForTwoMsg}</p>
                    <p style={{color:"white"}}>🍜{ARRAY_OF_MENU_OF_RESTAURANTS[ind]?.data?.cuisines.join(",")}</p>
                </div>
                
            </div>

            <div style={{display:"flex", alignItems:"center", width:"80%", margin:"auto"}}>
                <SearchBar classs="dish_search" ind={ind} setMenu={setMenu} VegOnly={VegOnly} />
                <div className="vegonlydiv">
                    <p>VegOnly</p>
                    <input type="checkbox" id="switch" onClick={()=>{
                        setVegOnly(!VegOnly)
                    }}/><label for="switch">Toggle</label>
                </div>
            </div>

            
            
            
            <div style={{display:"flex",flexDirection:"column"}}>
                {
                    Object.keys(Menu).map(
                        key=>{
                            return<>
                            <Card id={id} classs={"dish"} name={Menu[key].name} link={image_url+Menu[key].cloudinaryImageId} price={Menu[key].price} />
                            </> 
                        }
                    )
                }
            </div>
            
        </div>
        
        
    )   
}


export default DetailedView;
