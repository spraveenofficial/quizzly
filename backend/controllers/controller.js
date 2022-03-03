import userModel from "../models/user.js";
import quizModel from "../models/quiz.js";
import token from "../utils/tokens.js";
import encryptionServices from "../services/encryption-services.js";
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
        success: true,
        statusCode: 200,
        message: "Login Success",
        token: token(user._id),
      });
    } else if (!user) {
      return res.json({
        message: "User Not Found, Signup Now",
        statusCode: 500,
        success: false,
      });
    } else {
      return res.json({
        message: "Invalid Password",
        statusCode: 500,
        success: false,
      });
    }
  }
  async verifyUser(req, res) {
    const { id } = req.data;
    const user = await userModel.findOne({ _id: id });
    return res.json({
      success: true,
      message: "User successfully retreived",
      statusCode: 200,
      data: {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
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
  }
  async profile(req, res) {
    const { email } = req.body;
    userModel.findOne({ email }).then((response) => {
      return res.json({
        data: response,
      });
    });
  }
  async leaderBoard(req, res) {
    const user = await userModel.find();
    if (!user) {
      return res.json({
        message: "No user Found on LeaderBoard",
        success: false,
      });
    }
    const haveCompletedQuiz = new Array(user.find((x) => x.completedQuiz));
    const newArray = haveCompletedQuiz.map((eachUser) => {
      return {
        name: eachUser.name,
        email: eachUser.email,
        totalScore: eachUser.completedQuiz.reduce(
          (a, b) => Number(a) + Number(b["score"]),
          0
        ),
      };
    });
    const encryptedData = await encryptionServices.encrypt(newArray);
    return res.json({
      message: "Successfully Retrieved",
      statusCode: 200,
      data: encryptedData,
      success: true,
    });
  }
  async createQuiz(req, res) {
    const { id } = req.data;
    const user = await userModel.findOne({ _id: id });
    if (!user.isAdmin) {
      return res.json({
        message: "You, are not admin",
        success: false,
        statusCode: 404,
      });
    } else {
      const newQuiz = new quizModel(req.body);
      newQuiz
        .save()
        .then(() => {
          return res.json({
            message: "Successfully Created Quiz",
            success: true,
            statusCode: 200,
          });
        })
        .catch((err) => {
          console.log(err);
          return res.json({
            message: "Unable to Create Quiz",
            success: false,
            statusCode: 500,
          });
        });
    }
  }
  async allQuiz(req, res) {
    const quiz = await quizModel.find();
    var results = await Promise.all(
      quiz.map(async (eachQuiz) => {
        return {
          title: await encryptionServices.encrypt(eachQuiz.title),
          marks: eachQuiz.marks,
          questionsCount: eachQuiz.noOfQuestions,
          thumbnail: eachQuiz.thumbnail,
          path: eachQuiz._id,
        };
      })
    );
    if (!quiz) {
      res.json({
        message: "No Quiz Found",
        success: false,
        statusCode: 404,
      });
    } else {
      res.json({
        message: "Request Success",
        success: true,
        statusCode: 200,
        data: results,
        testing: "fmwafm"
      });
    }
  }
  async eachQuiz(req, res) {
    const id = req.params.id;
    const quiz = await quizModel.findOne({ _id: id });
    if (!quiz) {
      res.json({
        message: "Quiz Not Found",
        success: false,
        statusCode: 404,
      });
    } else {
      const newArray = new Array(quiz);
      var results = await Promise.all(
        newArray.map(async (eachQuiz) => {
          return {
            id: eachQuiz._id,
            title: await encryptionServices.encrypt(eachQuiz.title),
            marks: eachQuiz.marks,
            noOfQuestions: eachQuiz.noOfQuestions,
            thumbnail: eachQuiz.thumbnail,
            questions: await encryptionServices.encrypt(eachQuiz.questions),
          };
        })
      );
      return res.json({
        message: "Successfully Retrieved",
        success: true,
        statusCode: 200,
        data: results,
      });
    }
  }
}

export default new MainController();
