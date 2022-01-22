let express = require("express");
let app = express();
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root", // your root username
  database: "join_us", // the name of your db
});

app.get("/", function (req, res) {
  let q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, function (err, results) {
    if (err) throw err;
    let count = results[0].count;
    res.send("We have " + count + " users in our db");
  });
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
