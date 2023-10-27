import React from 'react'
const arr=["","","","","","","","","","","","","","","","","","",""];
const i=0;
const Shimmer = () => {
  return (
    // <div>
    //     <div className='shimmerdiv'></div>
    // </div>
    
        <div className='shimmer'> 
            {
                arr.map((Obj,i)=>{
                    return <div className='shimmerdiv' key={i}></div>
                  })
            }
        </div>
      
  )
}

export default Shimmer