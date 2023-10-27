// import Header from './header';
// import Body from "./body";
// import Footer from "./footer"
// import { useState, useEffect} from 'react';
// import Shimmer from './shimmer';

// const PageLayout=()=>{
//     // remember (<React.Fragment> </React.Fragment> is same as <> </>)
//     // we cannot give styling to a react fragment because it does not exist in our DOM , inorder to apply syling there are 2 ways 1) Give the class name and apply CSS using className from css file 2) inline style 
//         return(
//             <>
//                 <Header />
//                 <Body />
//                 <Footer />   
//             </>
//         );
// }

// export default PageLayout;



import Header from './header';
import Body from "./body";
import Footer from "./footer"
import { useState, useEffect} from 'react';
import Shimmer from './shimmer';
import {Outlet} from 'react-router-dom';

const PageLayout=({children})=>{
    // remember (<React.Fragment> </React.Fragment> is same as <> </>)
    // we cannot give styling to a react fragment because it does not exist in our DOM , inorder to apply syling there are 2 ways 1) Give the class name and apply CSS using className from css file 2) inline style
    return (
        <div className='PageLayout' style={{backgroundColor:"#e5eaf5"}}>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default PageLayout;