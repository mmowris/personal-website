const express = require("express");
const path = require("path");

const app = express();

// serve assets
app.use(express.static("assets"));
//app.use("/assets", express.static(__dirname + "/assets"));

// handle `/` request
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "www/index.html"));
});

app.use("/www", express.static(path.resolve(__dirname, "www")));

const port = (process.env.PORT = 3000);

// start the server listening for requests
app.listen(port, () => console.log("Server is running on ${port}"));
