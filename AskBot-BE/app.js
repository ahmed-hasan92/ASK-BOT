const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const geminiRoutes = require("./api/gemini/gemini.routes");
const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
require("dotenv").config();

const port = 5000;
const corsOptions = {
  origin: "*",
  methodes: "GET,POST,DELETE,PUT,HEAD,PATCH",
  credential: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use("/api", geminiRoutes);

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`The App running on port: ${port}`);
});
