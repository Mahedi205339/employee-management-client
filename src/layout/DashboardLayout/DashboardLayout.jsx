import { NavLink } from "react-router-dom";
import Container from "../../components/Container/Container";
import DropdownMenu from "../../pages/Home/Navbar/DropdownMenu";
import logo from '../../assets/logo.png'
import { IoHome } from "react-icons/io5";

const DashboardLayout = () => {
    const navLinks = <>
        <li>
            < NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-blue-800 text-white' : ''
                }
                to="/">
                <IoHome></IoHome>
                Home</NavLink>
        </li>



    </>

    return (
        <Container>
            <div className="drawer bg-base-200  rounded-t-lg">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-transparent">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <img className="w-20" src={logo} alt="" />
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal font-semibold ">
                                {/* Navbar menu content here  */}
                                {navLinks}
                                <DropdownMenu></DropdownMenu>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 font-semibold ">
                        {/* Sidebar content here  */}
                        {navLinks}
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-blue-800 text-white' : ''
                        } to="/login">Login</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'bg-blue-800 text-white' : ''
                        } to="/signup">SignUp</NavLink></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
};

export default DashboardLayout;