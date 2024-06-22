const axios = require("axios");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.generateAnswer = async (req, res, next) => {
  try {
    const { question } = req.body;
    const result = await model.generateContent(question);
    const response = await result.response;
    const text = await response.text();
    res.status(200).json({ answer: text });
  } catch (error) {
    next(error);
    next(error);
  }
};
