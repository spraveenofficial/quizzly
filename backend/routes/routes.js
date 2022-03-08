import { Router } from "express";
import Controller from "../controllers/controller.js";
import middleware from "../middlewares/middleware.js";
const app = Router();

app.post("/signup", Controller.signup);
app.post("/login", Controller.login);
app.post("/completedquiz", middleware, Controller.updateUserCompletedQuiz);
app.get("/profile", middleware, Controller.profile);
app.get("/recent-quiz", middleware, Controller.recentQuiz);
app.get("/verify", middleware, Controller.verifyUser);
app.get("/leaderboard", middleware, Controller.leaderBoard);
app.post("/create-quiz", middleware, Controller.createQuiz);
app.get("/quiz", middleware, Controller.allQuiz);
app.get("/quiz/:id", middleware, Controller.eachQuiz);
export default app;
