/* eslint no-console: "off" */
const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;
const environment = process.env.APP_ENV || "staging";

app.use("/", express.static("dist"));
app.use("/", (req, res) =>
  res.sendFile(path.join(__dirname, "dist", "index.html"))
);

app.listen(PORT, err => {
  if (err) console.log(`=> OMG!!! 🙀 ${err}`);
  console.log(
    `=> 🔥  Webpack ${environment} server is running on port ${PORT}`
  );
});
