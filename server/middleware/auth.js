// we have signed the token now we need to verify this token
//whenever user makes a request to the protected route, first the token is verified

const jwt = require("jsonwebtoken");

// Authenticate user middleware
exports.requireLogin = (req, res, next) => {
  try {
    //first we need to to find if its authorized in header
    if (req.headers.authorization) {
      // Get token from header
      const token = req.headers.authorization.split(" ")[1];
      // Verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      // Attach token with request
      req.user = decode;
      next();
    } else {
      return res.status(400).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.log("Something went wrong");
  }
};
