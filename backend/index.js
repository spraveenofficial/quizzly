import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import apiRoutes from "./routes/routes.js";
import "./database/db.js";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 3505;

// Registering Routes
app.use("/v1/api", apiRoutes);

// Server initialize
app.listen(PORT, () => console.log(`App started running on ${PORT}`));
