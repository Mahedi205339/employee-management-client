import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ContactUs from "../pages/ContactUs/ContactUs";
import Layout from "../layout/Layout";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Registration from "../pages/Registration/Registration";
import AllEmployee from "../pages/dashboard/AllEmployee/AllEmployee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
    , {
        path: '/login',
        element: <Login></Login>
    }
    ,
    {
        path: '/signUP',
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/allEmployee',
                element: <AllEmployee></AllEmployee>
            }
        ]
    }
])

export default router