let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("HELLO FROM OUR WEB APP!");
});

app.get("/joke", function (req, res) {
  let joke = "What do you call a dog that does magic tricks? A labracadabrador";
  res.send(joke);
});

app.get("/random_num", function (req, res) {
  let rand = Math.floor(Math.random() * 10) + 1;
  res.send("Your lucky number is " + rand);
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
