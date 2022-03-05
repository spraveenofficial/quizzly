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
    const { id } = req.data;
    const { quizId, score, timeTaken } = req.body;
    try {
      userModel
        .updateOne(
          { _id: id },
          {
            $push: {
              completedQuiz: {
                $each: [{ id: quizId, score: score, timeTaken: timeTaken }],
                $sort: { score: -1 },
              },
            },
          }
        )
        .exec()
        .then((response) => {
          return res.json({
            message: "Suceesfully Updated",
          });
        });
    } catch (error) {
      return res.json({
        message: "Data retreived",
        data: error,
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

    const haveCompletedQuiz = user.filter((x) => x.completedQuiz.length >= 1);
    if (!haveCompletedQuiz) {
      return res.json({
        message: "No user Found on LeaderBoard",
        success: false,
      });
    }

    const newArray = haveCompletedQuiz.map((eachUser) => {
      if (eachUser.completedQuiz) {
        return {
          name: eachUser.name,
          email: eachUser.email,
          totalScore: eachUser.completedQuiz.reduce(
            (a, b) => Number(a) + Number(b["score"]),
            0
          ),
        };
      }
    });
    return res.json({
      message: "Successfully Retrieved",
      statusCode: 200,
      data: newArray.sort((a, b) => b.totalScore - a.totalScore),
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
            timeRequired: eachQuiz.timeRequired,
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
  async recentQuiz(req, res) {
    const { id } = req.data;
    const user = await userModel.findOne({ _id: id });
    !user &&
      res.json({
        message: "User not found",
        statusCode: 404,
        success: false,
      });
    if (user.completedQuiz.length == 0) {
      res.json({
        message: "You have not played any quiz yet.",
        success: true,
        statusCode: 200,
      });
    } else {
      try {
        const data = await Promise.all(
          user.completedQuiz.map(async (eachQuiz) => {
            const quizDB = await quizModel.findOne({ _id: eachQuiz.id });
            return {
              title: quizDB.title,
              scored: eachQuiz.score,
              totalMarks: quizDB.marks,
              timeTaken: eachQuiz.timeTaken,
              thumbnail: quizDB.thumbnail,
            };
          })
        );
        res.json({
          message: "Successfully Retreived",
          statusCode: 200,
          success: true,
          data: data,
        });
      } catch (error) {
        res.json({
          message: "SomeProblem happend in Server",
          success: false,
          statusCode: 501,
        });
      }
    }
  }
}

export default new MainController();
