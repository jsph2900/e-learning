require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES
const userRoutes = require("./routes/usersRoutes");

app.use("/api/users", userRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      `listening on: http://localhost:${PORT}, Server running in ${process.env.NODE_ENV} mode`
    );
  });
});
