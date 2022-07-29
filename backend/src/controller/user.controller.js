const userModel = require("../model/User.schema");

const signUpController = async ({ name, email, password, mobile }) => {
  if (!name || !email || !password || !mobile) {
    return { status: "error", message: "Insufficiant data", response: null };
  } else {
    const loginUser = await userModel.findOne({ email, password });
    if(loginUser){
      return {
        status:"error",
        message:"User already exist",
        response:null
      }
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
        message: "Login successdul",
        response: loginUser,
      };
    }else{
      return {
        status:"error",
        message:"invalid email id or password",
        response:null
      }
    }
  }
};

module.exports = { signUpController, loginController };
