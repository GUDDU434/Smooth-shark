const { Router } = require("express");
const {
  signUpController,
  loginController,
} = require("../controller/user.controller");
const { getAllUsers } = require("../controller/user.controller");
const userModel = require("../model/User.schema");

const userRouter = Router();
userRouter.get("/allusers/:id", getAllUsers);

userRouter.post("/signup", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const { status, message, response } = await signUpController({
    name,
    email,
    password,
    mobile,
  });

  if (status == "error") {
    return res.status(400).send({ message, status });
  } else {
    const avatarImage = `https://api.multiavatar.com/vineeth${name}.svg`;

    const userCreated = new userModel({
      name,
      email,
      password,
      mobile,
      avatarImage,
    });
    await userCreated.save((err, sucess) => {
      if (err)
        return res.status(400).send({
          message: "Error while uploading/saving user into the database",
          status: "error",
        });
      else
        return res
          .status(201)
          .send({ message: "user created sucessfully", status: "success" });
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const data = await loginController({ email, password });
  if (data.status == "error") {
    return res.status(400).send({ message: data.message, status: data.status });
  } else {
    return res.status(200).send({
      message: data.message,
      status: data.status,
      response: data.response,
    });
  }
});

module.exports = userRouter;
