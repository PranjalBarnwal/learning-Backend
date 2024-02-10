var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res, next) {
  res.render("index", { title: "happy" });
});

router.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    username: "Happs",
    age: 20,
    name: "Pranjal Barnwal",
  });
  res.send(createdUser);
});

router.get("/findall", async (req, res) => {
  let allUsers=await userModel.find();
  res.send(allUsers);
});

router.get("/delete", async (req, res) => {
  let deletedUser=await userModel.findOneAndDelete({ _id: "65c7f40f48bfdaedf370355d"});
  res.send(deletedUser);
});

module.exports = router;
