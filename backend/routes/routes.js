import { Router } from "express";
import Controller from "../controllers/controller.js";
const app = Router();

app.get("/req", (req, res) => res.json("ok"));
app.post("/signup", Controller.signup);
app.get("/login", Controller.login);

export default app;
