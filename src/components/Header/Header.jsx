import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const {user , logout}=useContext(AuthContext)
  const handleSignOut=()=>{
    logout()
    .then()
    .catch()

  }
   
 const navlinks= <>
 <li className="text-[#fff] text-lg font-semibold"><NavLink  to={"/"}>Home</NavLink></li>
 <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/services"}>Services</NavLink></li>
 
 </>
   
    return (
        <div className="navbar bg-[#2d3e50]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navlinks
              }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case font-bold text-xl text-[#fff]">Music Festivals</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                navlinks
            }
          </ul>
        </div>
        <div className="navbar-end">
         {
          user ?
          <NavLink onClick={handleSignOut}  className="btn">Logout</NavLink>
          :
          <div>
            <NavLink to={"/register"}  className="btn mr-3">Register</NavLink>
          <NavLink to={"/login"} className="btn">Login</NavLink>
          </div>
         }
        </div>
      </div>
    );
};

export default Header;