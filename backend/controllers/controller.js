import userModel from "../models/user.js";
class MainController {
  async signup(req, res) {
    const { name, email, password } = req.body;
    const newUser = new userModel({
      name,
      email,
      password,
    });

    newUser
      .save()
      .then((response) => {
        return res.json({
          message: "Signup Successful",
          statusCode: 200,
          success: true,
        });
      })
      .catch((err) => {
        if (err.code === 11000) {
          return res.json({
            message: "User Already Exist",
            statusCode: 500,
            success: false,
          });
        } else {
          return res.json({
            message: "Error While Signup",
            statusCode: 401,
            success: false,
          });
        }
      });
  }
  async login(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: "token",
      });
    } else if (!user) {
      res.json({
        message: "Not registered",
      });
    } else {
      res.json({
        message: "Invalid password",
      });
    }
  }
}

export default new MainController();
