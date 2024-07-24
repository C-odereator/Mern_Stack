const { User } = require("../Models/models");
const { Contact } = require("../Models/contact");
const getAllUser = async (req, res) => {
  try {
    const user = await User.find({}, { password: 0 });
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json(user);
    // console.log(user);
  } catch (error) {
    req.status(400).json({ msg: "Error" });
  }
};

const getAllContact = async (req, res) => {
  try {
    const user = await Contact.find({}, { password: 0 });
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json(user);
  } catch (error) {
    req.status(400).json({ msg: "Error" });
  }
};
module.exports = {
  getAllUser,
  getAllContact,
};
