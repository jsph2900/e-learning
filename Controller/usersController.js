const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Sequelize = require("sequelize");
const db = require("../models");
const { Op } = require("sequelize");
const { generateToken } = require("../utilities/jwtTokenGenerator");

// DESCRIPTION: user sign up
// METHOD: GET
// ENDPOINT: /api/users/signup
const userSignup = expressAsyncHandler(async (req, res) => {
  try {
    const {
      fullName,
      birthDate,
      contactNumber,
      email,
      password,
      gender,
      role,
    } = req.body;

    const contactExist = await db.users.findOne({
      raw: true,
      where: {
        contact_number: contactNumber,
      },
    });

    if (contactExist) {
      return res.status(400).json({
        message: "Contact Number Already Exist",
        details: { ...req.body },
      });
    }

    const emailExist = await db.users.findOne({
      raw: true,
      where: {
        email,
      },
    });

    if (emailExist) {
      return res.status(400).json({
        message: "Email Address Already Exist",
        details: { ...req.body },
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await db.users.create({
      full_name: fullName,
      birth_date: birthDate,
      contact_number: contactNumber,
      email,
      password: hashPassword,
      gender,
      role,
    });

    const bearerToken = await generateToken(newUser.id);

    const user = newUser.get({ plain: true });

    return res.status(201).json({
      message: "Account Succesfully Created",
      details: { ...user, token: bearerToken },
    });
  } catch (error) {
    console.log(">>>> /api/users/signup | GET | ERROR:", error);
    return res
      .status(500)
      .json({ message: "Something Went Wrong Creating Your Account" });
  }
});

module.exports = { userSignup };
