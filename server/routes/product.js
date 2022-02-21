const router = require("express").Router();
const userPro = require("../models/products");
router.post("/product", async (req, res) => {
  //first of all lets destructure the data from the body
  const { productName, smallDesc, longDesc } = req.body;
  try {
    userPro = new Product({
      productName,
      smallDesc,
      longDesc,
    });
    await userPro.save(); //save the user
    return res.status(201).json({ message: "submitted successfully" }); // show this message when user saved
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});
module.exports = router;
