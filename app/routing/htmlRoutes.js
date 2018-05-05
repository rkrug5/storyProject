//this file is taken nearly verbatim from 16-hotrestaurant/solved/routes/htmlRoutes.js


// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/welcome.html"));
	});

	app.get("/choice1", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/choice1.html"));
	});


	app.get("/result1", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/result1.html"));
	});

	app.get("/result2", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/result2.html"));
	});

	app.get("/conclusion", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/conclusion.html"));
	});

	// If no matching route is found default to home
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/welcome.html"));
	});
};
