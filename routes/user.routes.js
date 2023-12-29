const express = require("express");
const userRouter = express.Router();
const { userModal } = require("../Model/user.model");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//!SIGIN REQUEST

userRouter.post("/signin", async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  try {
    let userExist = await userModal.findOne({ email });
    if (userExist) {
      res.status(200).json({ msg: "User already exist" });
    }
    else{
        bcrypt.hash(password, 5, async(err, hash)=> {
          
        });
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

//!LOGIN REQUEST;

userRouter.post("/login", async (req, res) => {
  try {
  } catch (err) {
    res.json({ msg: err });
  }
});
