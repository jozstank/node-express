const express = require("express");
const app = express();
const port = 3000;
const birds = require("./bird.js");

// app.get("/", (req, res) => {
//   res.send("this is get method");
// });
// app.post("/", (req, res) => {
//   res.send("this is post method");
// });
// app.put("/", (req, res) => {
//   res.send("this is put method");
// });
// app.delete("/", (req, res) => {
//   res.send("this is delete method");
// });

// app
//   .route("/")
//   .get((req, res) => {
//     console.log("this is get method");
//   })
//   .post((req, res) => {
//     console.log("this is post method");
//   })
//   .put((req, res) => {
//     console.log("this is put method");
//   })
//   .delete((req, res) => {
//     console.log("this is delete method");
//   });

// app.use((req, res) => {   //app.use for every method
//   res.send("this is app.use method in express");
// });

// app.use((err, req, res, next) => {
//   //error log software services === Sentry
//   console.error(err.stack);
//   res.status(500).send("something borke!");
// });

// app.use(express.static("public"));

// app.use("/bd", birds);

app.set("view engine", "pug");

app.get("/profile", (req, res) => {
  // connect to database and get the data
  res.render("profile", { title: "Hey", message: "Hello there!" });
});

app.get("/avator", (req, res) => {
  res.sendFile(`${__dirname}/sir.png`);
});

app.listen(port, () => {
  console.log("server is running on port 3000");
});
