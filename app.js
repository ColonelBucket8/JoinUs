let express = require("express");
let app = express();
let mysql = require("mysql");
let bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

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
    res.render("home", { data: count });
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

app.post("/register", function (req, res) {
  let person = {
    email: req.body.email,
  };
  connection.query("INSERT INTO users SET ?", person, function (err, results) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
