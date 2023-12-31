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
import Payment from "../pages/dashboard/Payment/Payment";
import SalaryHistory from "../pages/dashboard/SalaryHistory/SalaryHistory";
import AllPaymentHistory from "../pages/dashboard/SalaryHistory/AllPaymentHistory";
import Progress from "../pages/dashboard/Progress/Progress";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage> ,
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
                element: <AdminRoute><ManageEmployee></ManageEmployee></AdminRoute>
            },
            {
                path: '/dashboard/payment/:email',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://y-beige-two.vercel.app/employee/${params.email}`)

            },
            {
                path: '/dashboard/salaryHistory',
                element: <SalaryHistory></SalaryHistory>
            },
            {
                path: '/dashboard/allPaymentHistory',
                element: <AllPaymentHistory></AllPaymentHistory>
            }
            ,
            {
                path: '/dashboard/progress',
                element: <Progress></Progress>
            }
        ]
    }
])

export default router