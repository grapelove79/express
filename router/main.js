module.exports = function(app) {
	app.get("/", function(req, res){
		res.render("home.ejs");
	});

	app.get("/about", function(req, res){
		res.render("about.html");
	});
	
}
