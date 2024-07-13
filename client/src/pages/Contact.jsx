import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        className="login"
        style={{
          backgroundImage:
            "url('https://images2.alphacoders.com/133/1339621.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="login_right">
          <form /*onSubmit={handleSubmit}*/>
            <h1
              style={{
                textShadow: "3px 3px 3px black",
              }}
            >
              Contact
            </h1>
            <label htmlFor="Username">Username</label>
            <input
              type="Username"
              id="Username"
              className="Username"
              name="Username"
              placeholder="Enter your Username"
              // onChange={handleInput}
              // value={user.email}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="email"
              name="email"
              placeholder="Enter your Email"
              // onChange={handleInput}
              // value={user.password}
            />
            <label htmlFor="email">Address</label>
            <textarea
              cols="56"
              rows="7"
              id="address"
              className="address"
              name="address"
              placeholder="Enter your address"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
