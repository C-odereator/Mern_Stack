import React from "react";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div className="login">
        <div className="login_right">
          <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInput}
              value={user.email}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInput}
              value={user.password}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
