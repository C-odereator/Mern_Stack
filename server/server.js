const express = require("express");
const { router } = require("./Router/router");
const { contact } = require("./Router/contact");
const { connectDB } = require("./Connection/Connect");

const app = express();
const port = 8081;
require("dotenv").config();

// middleware to access data from the body
app.use(express.json());

// connection
connectDB(process.env.mongo_url);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/router", router);
app.use("/contact", contact);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
