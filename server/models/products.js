const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  //the feilds should be mentioned below
  {
    productName: {
      type: String,
      trim: true,
      required: true,
    },
    smallDesc: {
      type: String,
      trim: true,
      required: true,
    },
    longDesc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema); // i will call it user and call it UserSchema
