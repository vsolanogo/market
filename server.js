const proxy = require("http-proxy-middleware");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/api",
  proxy({
    target: "http://apiko-marketplace-api-2019.herokuapp.com",
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      "^/api": ""
    }
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port);
