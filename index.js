const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

require("./routes")(app);

app.use(express.static(path.join(__dirname, "client/build")));

/* static file declaration */
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  /* "catchall" handler for any request that doesn't match above */
  app.get("*", (req, res) => {
    res.sendFile(path.join((__dirname = "client/build/index.html")));
  });
}

/* "catchall" handler for any request that doesn't match above */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

/* start server */
app.listen(PORT);
