const express = require("express");
const User = require("../models/user.js");
var jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await User.find();
  res.send(data);
});

router.get("/:id", async (req, res) => {
  const data = await User.findById(req.params.id);
  res.send(data);
});

router.post('/', async (req, res)=>{
    const data = await User.create(req.body)
    res.send(data)
})

router.post("/login", async (req, res) => {
  const data = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (data) {
    // var token = jwt.sign(data,process.env.sec)
    const ans = {
      isValid: true,
      msg: "Welcome",
      data: data,
    };
    res.send(ans);
  } else {
    const data = {
      isValid: false,
      msg: "email/password does not match",
    };

    res.send(data);
  }

  //   if (data) {
  //     var token = jwt.sign(data,process.env.sec)
  //     const ans = {
  //       isValid: true,
  //       msg: "Welcome",
  //       token: token,
  //     };
  //     res.send(ans);
  //   } else {
  //     const data = {
  //       isValid: false,
  //       msg: "email/password does not match",
  //     };

  //     res.send(data);
  //   }
});

router.delete("/:id", async (req, res) => {
  const data = await User.findByIdAndDelete(req.params.id);
  res.send(data);
});

router.patch("/:id", async (req, res) => {
  const data = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
});
module.exports = router;
