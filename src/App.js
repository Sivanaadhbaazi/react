    import React from 'react';
    import ReactDOM  from 'react-dom/client';
    import {Header} from "./components/Header";
    import Body from "./components/Body";
    import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
    import About from './components/About';
    import ErrorC from './components/ErrorC';
    import Contact from './components/Contact';
    import Resturant from './components/Resturant';
      

    const AppLayout = () => {

        return(
            <div className = "app">
                <Header/>               
                <Outlet />
            </div>

        )
    }

    const router   =  createBrowserRouter([
        {
            path:"/",
            element:<AppLayout />,
            
            children: [
                {
                    path:"/",
                    element:<Body />
                },
                {
                    path:"/about",
                    element:<About />
                },
                {
                    path:"/contact",
                    element:<Contact />,
        
                },
                {
                    path:"/resturants/:resId",
                    element:<Resturant />
                }
            ],
            
            errorElement: <ErrorC />
        }
        
    ])
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={router}/>)