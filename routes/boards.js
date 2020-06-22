var express = require("express");
const formidable = require("formidable");
var router = express.Router();

const data = require("./../uploads/data.json");

router.get("/", function (req, res) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

router.post("/", function (req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on("fileBegin", function (name, file) {
    file.path = __dirname + "/../uploads/" + file.name;
  });

  form.on("file", function (name, file) {
    console.log("Uploaded " + file.name);
  });

  res.status(201).json({ message: "File sent successfully" });
});

module.exports = router;
