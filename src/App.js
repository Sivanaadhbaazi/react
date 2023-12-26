    import React from 'react';
    import ReactDOM  from 'react-dom/client';
    import {Header} from "./components/Header";
    import Body from "./components/Body";
    import { RouterProvider, createBrowserRouter } from 'react-router-dom';
    import About from './components/About';
    import ErrorC from './components/ErrorC';

      

    const AppLayout = () => {

        return(
            <div className = "app">
                <Header/>
                <Body></Body>
            </div>

        )
    }

    const router   =  createBrowserRouter([
        {
            path:"/",
            element:<AppLayout />,
            errorElement: <ErrorC />
        },
        {
            path:"/About",
            element:<About />
        },
        {

        }
    ])
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={router}/>)