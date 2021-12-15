const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());

const port = 3000;

app.post("/auth/login", (req, res) => {
  if (req.body.username == "test" && req.body.password == "test123") {
    res.send(
      JSON.stringify({
        isLogged: true,
        text: "Please verify your email address",
      })
    );
  } else {
    res.send(JSON.stringify({ isLogged: false }));
  }
});

app.post("/auth/register", (req, res) => {
  res.send(
    JSON.stringify({ username: req.body.username, email: req.body.email })
  );
});

app.post("/post/blog", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
