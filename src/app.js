'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render("../views/home/index");
});

app.get('/admin/add', function(req, res){
    res.render("../views/admin/add_noticia");
});

app.get('/noticias/', function(req, res){
    res.render("../views/noticias/noticias");
});

app.get('/noticias/detalhes', function(req, res){
    res.render("../views/noticias/detalhe");
});



app.listen(3000, function(){
    console.log('Rodando com express');
});