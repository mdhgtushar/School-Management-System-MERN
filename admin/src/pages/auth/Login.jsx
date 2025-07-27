import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const loginAction = (e) => {
    e.preventDefault();
    dispatch(
      logIn({ email: e.target.email.value, password: e.target.password.value })
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-extrabold text-green-700 mb-2 text-center uppercase tracking-wide">Admin Login</h2>
        <p className="text-gray-600 mb-8 text-center">Sign in to your admin account</p>
        <form onSubmit={loginAction} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              placeholder="Email address"
              name="email"
              id="email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
              placeholder="Password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition text-lg uppercase tracking-wide shadow"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
