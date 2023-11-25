import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ContactUs from "../pages/ContactUs/ContactUs";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            }
            ,
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            }
        ]
    }
    , {
        path: '/login',
        element: <Login></Login>
    }
    ,
    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
])

export default router