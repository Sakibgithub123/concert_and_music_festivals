import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../assets/logo.png"

const Header = () => {
  const {user , logout}=useContext(AuthContext)
  const handleSignOut=()=>{
    logout()
    .then()
    .catch()

  }
   
 const navlinks= <>
 <li className="text-[#fff] text-lg font-semibold"><NavLink  to={"/"}>Home</NavLink></li>
 <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/about"}>About Us</NavLink></li>
 <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/blog"}>Blog</NavLink></li>
 {
  user?  <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/contact"}>Contact</NavLink></li> :''
 }
 {
   user?  <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/nearyou"}>NearYou</NavLink></li> :''
 }

 
 </>
   
    return (
        <div className="navbar bg-[#2d3e50] font-montserrat">
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
          <a className="btn btn-ghost normal-case font-bold text-xl text-[#fff]" > <img className="rounded-full" width={50} height={50} src={logo} alt="" />Music Festivals</a>
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