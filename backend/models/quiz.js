import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    timeRequired: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    noOfQuestions: {
      type: Number,
      required: true,
    },
    questions: [],
  },
  { timestamps: true }
);

const quizModel = mongoose.model("quizs", quizSchema);

export default quizModel;
