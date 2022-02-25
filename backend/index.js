import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import apiRoutes from "./routes/routes.js";
// Ins
import "./database/db.js";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Registering morgan for development
app.use(morgan("dev"));

// Registering Cors
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

app.use(express.json());

const PORT = process.env.PORT || 3505;

// Registering Routes
app.use("/v1/api", apiRoutes);

// Server initialize
app.listen(PORT, () => console.log(`App started running on ${PORT}`));
