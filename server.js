var express = require("express");

var app = express();

var router = require("./router/main")(app);


app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
//app.engine("html", require("ejs").renderFile);//ejs를 html로 변경해준다.


app.use("/public", express.static(__dirname + "/public"));

app.set("port", process.env.PORT || 3030);
// port를 지정한다. exprss야 process.env가 port임을 알고 있으면 그리고 port를 3030으로 지정함.


// 루트 페이지를 /로 명시해 주는 이유는 rest적인 관저에서 좋다.
//app.get("/", function(req, res){
//	res.type("text/plain");
//	res.send("My first Express server");
//});
// app이 가져오게 한다. 루트, 메인, 도메인일 경우, 응답받은 곳에 plain 텍스트인 문자열을 보내다.


app.use(function(req, res){
	res.type("text/plain");
	res.status("404");
	res.send("404 - Not found!!!");
});

app.use(function(req, res){
	res.type("text/plain");
	res.status("500");
	res.send("500 - Server Error");
});

app.listen(app.get("port"), function(){
	console.log("Express server is running at localhost:" + app.get("port"));
});

// 그리고 이걸 3030포트가 알게 하려면 listen을 통해...
