const express = require("express");
const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
    address: String,
  },
  {
    privateKey: false,
  }
);

const userModal = mongoose.Model("user", userSchema);
module.exports = { userModal };
