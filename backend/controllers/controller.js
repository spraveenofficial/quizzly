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
  async updateUserCompletedQuiz(req, res) {
    const { email } = req.body;
    try {
      userModel
        .updateOne(
          { email },
          {
            $push: {
              completedQuiz: {
                $each: [{ id: 7, score: 70, timeTaken: 10 }],
                $sort: { score: -1 },
              },
            },
          }
        )
        .exec()
        .then((response) => {
          return res.json({
            message: "Data retreived",
            data: response,
          });
        });
    } catch (error) {
      return res.json({
        message: "Data retreived",
        data: response,
      });
    }

    // userModel.findOne({ email }).then((response) => {
    //   return res.json({
    //     message: "Data retreived",
    //     data: response,
    //   });
    // });
  }
  async profile(req, res) {
    const { email } = req.body;
    userModel.findOne({ email }).then((response) => {
      return res.json({
        data: response,
      });
    });
  }
}

export default new MainController();
