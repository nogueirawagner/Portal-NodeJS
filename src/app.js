'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', function(req, res){
    res.render("../views/sessao/tecnologia");
});

app.listen(3000, function(){
    console.log('Rodando com express');
});