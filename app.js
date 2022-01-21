let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("HELLO FROM OUR WEB APP!");
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
