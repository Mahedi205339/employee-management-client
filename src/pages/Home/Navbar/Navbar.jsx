import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";





const Navbar = () => {

  const navLinks = <>
    <li><Link to="/contactUs">Contact us</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">SignUp</Link></li>

  </>

  return (
    <Container>
      <div className="drawer bg-gray-500  rounded-t-lg">

        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-transparent text-white">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Employee Manager</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal font-semibold text-cyan-500">
                {/* Navbar menu content here */}
                {navLinks}
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-black bg-opacity-40 font-semibold text-cyan-500">
            {/* Sidebar content here */}
            {navLinks}
          </ul>
        </div>
      </div>

    </Container>
  );
};

export default Navbar;