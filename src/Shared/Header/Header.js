import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.svg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then({})
      .catch((e) => console.log(e));
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        {user?.email && <Link to="/packges">Add Packages</Link>}
      </li>
      <li className="font-semibold">
        {user?.email && <Link to="/orders">My orders</Link>}
      </li>
      <li className="font-semibold">
        {user?.email && <Link to="/myreviews">My reviews</Link>}
      </li>

      <li className="font-semibold">
        <Link to="/signup">SignUp/Login</Link>
      </li>
      <li>{user?.email}</li>
      <li className="font-bold">
        <Link to="/blog">Blog Page</Link>
      </li>
    </>
  );
  return (
    <div className="navbar h-20 mb-12 pt-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-28 mx-auto mt-0" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end flex justify-between">
        {
          user?.photoURL && (
            <img src={user?.photoURL} alt="" className="w-16 rounded-xl" />
          )
          // <FaUser></FaUser>
        }

        {user?.uid ? (
          <Link
            onClick={handleLogOut}
            className="btn-warning text-xl p-3 rounded-lg"
          >
            LogOut
          </Link>
        ) : (
          <Link to="login" className="btn-success text-xl p-3 rounded-lg">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
