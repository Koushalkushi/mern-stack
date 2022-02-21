const router = require("express").Router();
const User = require("../models/user");
const Categories = require("../models/categories");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { requireLogin } = require("../middleware/auth");

// Register user
router.post("/register", async (req, res) => {
  //first of all lets destructure the data from the body
  const { name, email, password } = req.body;
  try {
    //first step is to see the user is already registered or not
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashed_password = await bcrypt.hash(password, 10); // it will take two argument plaintext and salt. plain text will come from body
    //lets create new user
    user = new User({
      name,
      email,
      password: hashed_password,
    });
    await user.save(); //save the user
    return res.status(201).json({ message: "User created successfully" }); // show this message when user saved
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" }); // if user is not matched it will stop the code and return this
    }
    //if user(email) matches then we proceed this
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    //when user is known and password is correct we will sign a token to authorize the user so that the user can go to any place
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      //it receives two argument payload and secret
      expiresIn: "1h",
    });

    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});


router.post("/category", async (req, res) => {
  //first of all lets destructure the data from the body
  const { categoryName, shortDesc, longDes } = req.body;
  try {
    Categories = new Category({
      categoryName,
      shortDesc,
      longDes,
    });
    await Categories.save(); //save the user
    return res.status(201).json({ message: "submitted successfully" }); // show this message when user saved
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

// Get logged in user
router.get("/", requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password -__v");
    res.json(user);
  } catch (error) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

module.exports = router;
