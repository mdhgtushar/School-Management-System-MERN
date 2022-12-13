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
    <div>
      <h2>Login</h2>
      <br />
      <br />
      <form action="" method="post" onSubmit={loginAction}>
        <input
          type="text"
          className="border border-black p-2"
          placeholder="Email.."
          name="email"
        />
        <br />
        <br />
        <input
          type="password"
          className="border border-black p-2"
          placeholder="Password.."
          name="password"
        />
        <br />
        <br />
        <input
          type="submit"
          className="border border-black p-2"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
