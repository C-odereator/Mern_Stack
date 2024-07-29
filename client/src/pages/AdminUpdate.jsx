import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../Store/Auth";
import Image from "../assets/Register-Back.png";

const AdminUpdate = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [userData, setUserData] = useState(true);
  const { users } = useAuth();

  // if (userData && users) {
  //   setUser({
  //     username: users.username,
  //     email: users.email,
  //     phone: users.phone,
  //     // password: users.passwor
  //   });
  //   setUserData(false);
  // }

  useEffect(() => {
    if (users && userData) {
      setUser({
        username: users.username || "",
        email: users.email || "",
        phone: users.phone || "",
        password: "", // assuming you don't want to show password in the form
      });
    }
  }, [users]);
  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const updateUser = async (id) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/admin/edit/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
      }
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  return (
    <>
      <div className="register">
        <div className="register_left">
          <img src={Image} height={"100%"} alt="" />
        </div>
        <div className="register_right">
          <form onSubmit={updateUser}>
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
            <input type="submit" value="Update Data" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminUpdate;
