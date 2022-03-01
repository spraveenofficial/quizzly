import { Router } from "express";
import Controller from "../controllers/controller.js";
import middleware from "../middlewares/middleware.js";
const app = Router();

// app.get("/req", (req, res) => res.json("ok"));
app.post("/signup", Controller.signup);
app.post("/login", Controller.login);
app.get("/completedquiz", Controller.updateUserCompletedQuiz);
app.get("/profile", Controller.profile);
app.get("/verify", middleware, Controller.verifyUser);
app.get("/leaderboard", middleware, Controller.leaderBoard);
app.post("/create-quiz", middleware, Controller.createQuiz);
export default app;
