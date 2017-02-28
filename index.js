var express		= require('express');
var app			= express();
var dikaRoute	= require('./dikaRoute');

//Localhost:3000/dikaRoute/
app.use('/dikaRoute', dikaRoute);

//Routing
//Localhost:3000/
app.get('/hello', (req,res)=>{
	res.send('dari get Routing hello');
});

app.post('/hello', (req,res)=>{
	res.send('dari post Routing hello');
});

//URL Building
app.get('/user/:id([0-9])/:nama', function(req,res){
	res.send('Selamat datang : ' + req.params.nama + '<br/> ID anda adalah : ' + req.params.id);
});

//404
app.get('*',function(req,res){
	res.send("404 Halaman tidak ditemukan");
});
app.listen(3000 , function(){
	console.log('running');
});

