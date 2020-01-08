const express = require("express");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");

const userRoute = require("./routes/user.route");
const movieRoute = require("./routes/movie.route");
const ratingRoute = require("./routes/rating.route");
const actorRoute =  require("./routes/actor.route");
const actorfilmRoute =  require("./routes/actorfilm.route");
const categoryRoute =  require("./routes/category.route");
const categoryfilmRoute =  require("./routes/categoryfilm.route");

const app = express();
const port = 3000;
app.use(express.static("resources"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// app.use("/api", jsonServer.router("db.json"));
app.use("/users",userRoute);
app.use("/movies",movieRoute);
app.use("/ratings",ratingRoute);
app.use("/actors",actorRoute);
app.use("/actorfilms",actorfilmRoute);
app.use("/categorys",categoryRoute);
app.use("/categoryfilms",categoryfilmRoute);


app.listen(port, function () {
    console.log(`listening on port ${port}`);
});