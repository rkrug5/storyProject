// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// require("./routes/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/choice1", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/choice1.html"));
});
app.get("/result1", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/result1.html"));
});
app.get("/result2", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/result2.html"));
});

app.get("/conclusion", function (req, res) {
	res.sendFile(path.join(__dirname, "app/public/conclusion.html"));
});


// Listener
// ===========================================================
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});