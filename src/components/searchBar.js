import { useState } from "react";
import {ALL_RESTAURANTS_LIST} from "../constants"
import {ARRAY_OF_MENU_OF_RESTAURANTS} from "../constants";


function filter_res(text){
    const filtered=ALL_RESTAURANTS_LIST.filter((obj)=>{
      return obj.data.name.toLowerCase().includes(text.toLowerCase());
    })
    return filtered;
}

function filter_dish(text, ind,VegOnly){
    const menu=ARRAY_OF_MENU_OF_RESTAURANTS[ind]?.data?.menu.items;
    const keys=Object.keys(menu);
    let arr=[];
    keys.map((key)=>{
        if( VegOnly===true){
            if(menu[key].attributes.vegClassifier==='VEG' && menu[key].name.toLowerCase().includes(text.toLowerCase()))
            arr.push(menu[key]); 
        }
         

       else{ 
        if( menu[key].name.toLowerCase().includes(text.toLowerCase()) )
            arr.push(menu[key]);
        }
    })
    return arr;
}



const SearchBar=({classs,setFilteredProducts,setMenu,ind,VegOnly})=>{
    
    const[text,setText]=useState("")

    return (
        <>
            {
                classs==="Res_search"?<input className="searcharea" type="text" placeholder="  🕵  Search" value={text} onChange={(e)=>{ setFilteredProducts(filter_res(e.target.value,ind)); setText(e.target.value)}} />:null
            }
            {
                classs==="dish_search"?<input className="searcharea" type="text" placeholder="  🕵  Search" value={text} onChange={(e)=>{ setMenu(filter_dish(e.target.value,ind,VegOnly)); setText(e.target.value)}} />:null
            }
        </>
        
    )
}

export default SearchBar;