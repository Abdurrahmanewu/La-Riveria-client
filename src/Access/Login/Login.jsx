/* eslint-disable no-restricted-globals */
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
  };
  useTitle("Login");
  return (
    <div className="mt-28 flex justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-600 text-gray-100 ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleLogin}
          novalidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-100">
              Username
            </label>
            <input
              type="text"
              name="email"
              id="userEmail"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-gray-100">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
            Login
          </button>
        </form>
        {/* <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-xl text-gray-100">
            SignUp with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div> */}
        <p className="text-xl text-center sm:px-6 text-gray-100">
          Don't have any account?
          <Link className="text-xl" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
