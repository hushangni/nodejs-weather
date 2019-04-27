const path = require("path");
const express = require("express");
const hbs = require("hbs");

// express is a function, it creates a new express app
const app = express();

// Define paths for Express Config
const publicDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// set up handlebars for templating
// and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static public directory to serve
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Shangni Hu"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: "Shangni Hu",
    title: "About"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    name: "Shangni Hu",
    title: "Help"
  });
});

// app.com/weather
app.get("/weather", (req, res) => {
  res.send({
    forcast: "it's raining",
    location: "Toronto"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Shangni Hu",
    errorMessage: "help articlepage not found!"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Shangni Hu",
    errorMessage: "page not found!"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
