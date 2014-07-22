var express = require('express'),
	ejs = require('ejs'),
	bodyParser = require('body-parser'),
	app = express(); 


//creating a faux database
var articles = [{title: "title", author:"author", description:"description"}];

app.use(bodyParser.urlencoded()); //bodyparser allows express to extract parameters from post request 

app.set('view engine', 'ejs');

//this page will display all the articles and description from index.ejs 
app.get('/articles', function(req, res){
  res.render("articles/index", {articles: articles});
});

//this will get the new articles form submission page, new.ejs
app.get('/articles/new', function(req, res){
	res.render('articles/new')
});

//this page will show the specific article summary from the show.ejs file 
app.get('/articles/:id', function(req, res){
	var index = req.params.id;
	var article = articles[index];
	res.render("articles/show", {article:article})
})

//this will push the article into the array 
app.post('/articles', function(req,res){
	articles.push(req.body.article);
	res.redirect('/articles');
})


// site related

app.get('/', function(req, res){
	res.render("sites/index");
})

app.get('/about', function(req, res){
	res.render("sites/about");
})

app.get('/contact', function(req, res){
	res.render("sites/contact");
})





app.listen(3000, function(){
  console.log("SERVER STARTED ON localhost:3000");
});
