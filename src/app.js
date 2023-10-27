import React from 'react';
import ReactDOM from 'react-dom/client';
import PageLayout from "./components/pageLayOut";
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import AboutUs from "./components/AboutUs"
import ErrorPage from "./components/ErrorPage"
import ContactUs from './components/ContactUs';
import DetailedView from './components/DetailedView';
import Body from './components/body';
const root=ReactDOM.createRoot(document.getElementById("root"));
const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <PageLayout></PageLayout>,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path:"DetailedView/:id",
                element:<DetailedView/>,
            },
            {
                path:"/AboutUs",
                element:<AboutUs/>,
            },
            {
                path:"/ContactUs",
                element:<ContactUs/>,
            }
        ],
        errorElement:<ErrorPage/>
    },
]);

root.render(<RouterProvider router={appRouter}/>)
    
