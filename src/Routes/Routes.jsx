import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import ContactUs from "../pages/ContactUs/ContactUs";
import Layout from "../layout/Layout";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Registration from "../pages/Registration/Registration";
import AllEmployee from "../pages/dashboard/AllEmployee/AllEmployee";
import WorkShitEmployee from "../pages/dashboard/WorkShitEmployee/WorkShitEmployee";
import ManageEmployee from "../pages/ManageEmployee/ManageEmployee";
import PrivateRoute from "./PrivateRoute";
import EmployeeDetails from "../pages/dashboard/EmployeeDetails/EmployeeDetails";
import Payment from "../pages/dashboard/Payment/Payment";

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
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: '/registration',
                element: <PrivateRoute><Registration></Registration></PrivateRoute>
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
            ,
            {
                path: '/dashboard/work-shitForm',
                element: <WorkShitEmployee></WorkShitEmployee>
            },
            {
                path: '/dashboard/manageEmployee',
                element: <ManageEmployee></ManageEmployee>
            },
            {
                path: '/dashboard/employeeDetails/:email',
                element: <EmployeeDetails></EmployeeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/employee/${params.email}`)
            }
            ,
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            }
        ]
    }
])

export default router