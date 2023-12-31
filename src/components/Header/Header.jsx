import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../assets/logo.png"

const Header = () => {
  const { user, logout } = useContext(AuthContext)
  const handleSignOut = () => {
    logout()
      .then()
      .catch()

  }

  const navlinks = <>
    <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/"}>Home</NavLink></li>
    <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/about"}>About Us</NavLink></li>
    <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/blog"}>Blog</NavLink></li>
    {
      user ? <li className="text-[#fff] text-lg font-semibold"><NavLink to={"/contact"}>Contact</NavLink></li> : ''
    }
    {
      user ? <li className="text-[#fff] mb-4 md:mb-0 text-lg font-semibold"><NavLink to={"/nearyou"}>NearYou</NavLink></li> : ''
    }


  </>

  return (
    <div className="navbar bg-[#2d3e50] font-montserrat">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu bg-[#2d3e50] menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            {
              navlinks
            }
            <div className="navbar-end">
        {
          user ?
            <div className="flex flex-col md:flex-row gap-4">
              {user?.photoURL?
              <div className="avatar ">
              <div className="w-8 md:w-14 rounded-full">
              <img src={user.photoURL} />
                
              </div>
            </div>
               
                :''}
              
              <div> {user?.displayName? <p  className="bg-[#fff] text-sm text-[#2d3e50] py-2 px-3  border rounded font-medium ">{user.displayName}</p>  : ''}</div>
             <div className="my-2"> <NavLink onClick={handleSignOut} className="bg-[#fff] text-[#2d3e50] py-2 px-3  border rounded font-medium ">Logout</NavLink></div>
            </div>
            :
            <div className="flex flex-col justify-center items-center">
              <NavLink to={"/register"} className="bg-[#fff] text-[#2d3e50] py-2 px-3 my-2 border rounded font-medium ">Register</NavLink>
              <NavLink to={"/login"} className="bg-[#fff] text-[#2d3e50] mb-2 py-2 px-3  border rounded font-medium">Login</NavLink>
            </div>
        }
      </div>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case font-bold text-xl text-[#fff]" > <img className="rounded-full w-10 h-10 md:w-12 md:h-12 "  src={logo} alt="" />Music Festivals</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu  menu-horizontal px-1">
          {
            navlinks
          }
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        {
          user ?
            <div className="flex flex-row gap-4">
              {user?.photoURL?
              <div className="avatar online">
              <div className="w-14 rounded-full">
              <img src={user.photoURL} />
                
              </div>
            </div>
               
                :''}
              
              <div> {user?.displayName? <p className="btn">{user.displayName}</p>  : ''}</div>
             <div> <NavLink onClick={handleSignOut} className="btn">Logout</NavLink></div>
            </div>
            :
            <div>
              <NavLink to={"/register"} className="btn mr-3">Register</NavLink>
              <NavLink to={"/login"} className="btn">Login</NavLink>
            </div>
        }
      </div>
    </div>
  );
};

export default Header;