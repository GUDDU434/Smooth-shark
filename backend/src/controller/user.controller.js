const userModel = require("../model/User.schema");
const signUpController = async ({
  name,
  email,
  password,
  mobile,
  avatarImage,
}) => {
  if (!name || !email || !password || !mobile) {
    return { status: "error", message: "Insufficiant data", response: null };
  } else {
    const loginUser = await userModel.findOne({ email, password });
    if (loginUser) {
      return {
        status: "error",
        message: "User already exist",
        response: null,
      };
    }
    return { status: "success", message: "sucessfully created" };
  }
};

const loginController = async ({ email, password }) => {
  if (!email || !password) {
    return { status: "error", message: "Insufficiant data", response: null };
  } else {
    const loginUser = await userModel.findOne({ email, password });
    if (loginUser) {
      return {
        status: "Sucess",
        message: "Login successful",
        response: loginUser,
      };
    } else {
      return {
        status: "error",
        message: "invalid email id or password",
        response: null,
      };
    }
  }
};

module.exports = { signUpController, loginController };
module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel
      .find({ _id: { $ne: req.params.id } })
      .select(["email", "name", "avatarImage", "_id"]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};