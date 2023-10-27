import { useEffect, useState } from "react";
import {ALL_RESTAURANTS_LIST} from "../constants"
import Card from "./Card";
import SearchBar from "./searchBar";
import Shimmer from "./shimmer";
const Body=()=>{
  const[FilteredProducts,setFilteredProducts]=useState([]); 

    async function loadAllProducts(){
        // ignore the below fetch fuction call . The data from that call is never used but it was feched just to add some delay and so that we can create the shimmer UI effect 
        const data=await fetch("https://fakestoreapi.com/products")
        setFilteredProducts(ALL_RESTAURANTS_LIST);
    }
    useEffect(()=>{loadAllProducts()},[]);

    return (FilteredProducts.length==0?
    <div className="body">
      <div className="searchbardiv" style={{display:"flex",justifyContent:"space-around",alignContent:"center" }}>
        <SearchBar classs={"Res_search"}  setFilteredProducts={setFilteredProducts}/>
      </div>
      <Shimmer />
    </div>:<div className="body">

          <div className="searchbardiv">
            <SearchBar classs={"Res_search"} setFilteredProducts={setFilteredProducts}/>
          </div>

          <div className='resturant-list'>
          { 
            FilteredProducts?.map((resobj)=>{
              // remember no_key < index_Key< unique_Key & ...spread operator for spreading all the properties of an object
              return <Card classs={"card"} ImageLink={resobj.data.cloudinaryImageId} title={resobj.data.name} cuisines={resobj.data.cuisines} address={resobj.data.address} price={resobj.data.costForTwoString} id={resobj.data.id} key={+resobj.data.id}/>
            })
          }   
        </div>
    </div>
  )
}
export default Body;