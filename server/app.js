var express = require('express'); //nella var oggetto express importiamo il modulo 'express'
const il_path = require('path'); //modulo che setta in il_path l'indirizzo del file

var app = express();

/*
 app.get('/', function(req, res){ //req è l'oggeto client che fa la richiesta, res quello server
    res.send("<h1>prova 1</h1>");
 });
 
 app.get('/pagina1', function(req, res){
 res.send("<p>testo della pagina 1</p>");
});
*/ //dato che scrivere tutto l'html all'interno del res.send è infattibile, si fanno le istruzioni di riga 22

 app.listen(3000, function(){ //p1 è la porta http
    console.log("Server attivo sulla porta 3000");
 });



 app.get('/', function(req, res){ //permette di aprire un altro file
    res.sendFile(il_path.join(__dirname, 'provahtml/index.html')); //il_path.join concatena l'indirizzo esistente p1 con p2
 });
