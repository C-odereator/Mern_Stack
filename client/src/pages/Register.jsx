import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
      <div className="register">
        <div className="register_left">
          <img
            src="https://browsecat.art/sites/default/files/deer-black-wallpapers-104598-288765-5179775.png"
            height={"100%"}
            alt=""
          />
        </div>
        <div className="register_right">
          <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="username"
              name="username"
              placeholder="Enter your username"
              onChange={handleInput}
              value={user.username}
            />
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
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              className="phone"
              name="phone"
              placeholder="Enter your phone"
              onChange={handleInput}
              value={user.phone}
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
            <input type="submit" value="Register Now" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
