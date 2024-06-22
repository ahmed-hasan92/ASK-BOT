const express = require("express");
const { generateAnswer } = require("./gemini.controllers");
const router = express.Router();

router.post("/generate", generateAnswer);

module.exports = router;
