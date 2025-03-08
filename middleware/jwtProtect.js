const jwt = require("jsonwebtoken");
require("dotenv").config();
const expressAsyncHandler = require("express-async-handler");

const jwtProtect = expressAsyncHandler(async (req, res, next) => {
  let token = "";
  const headerAuth = req.headers.authorization;

  if (headerAuth && headerAuth.startsWith("Bearer")) {
    token = headerAuth.split(" ")[1];

    try {
      jwt.verify(token, process.env.JWT_SECRET);

      next();
    } catch (error) {
      res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized: No token provided" });
  }
});

module.exports = { jwtProtect };
