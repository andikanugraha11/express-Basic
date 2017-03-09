var express		= require('express');
var app			= express();
var dikaRoute	= require('./dikaRoute');
var path		= require('path');
var bodyParser	= require('body-parser');
var multer		= require('multer');
var upload		= multer();

app.set('view engine', 'pug');
app.set('views','./views');

// app.use(express.static(path.join(__dirname,'assets')));
app.use('/folder', express.static(path.join(__dirname,'assets')));
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(upload.array());
//Localhost:3000/dikaRoute/
app.use('/dikaRoute', dikaRoute);

app.get('/gambar', function(req,res){
	res.render('index',{judul:'coba'});
});

app.get('/form', function(req,res){
	res.render('myForm',{judul:"myForm"});
});
//post
app.post('/save', (req,res)=>{
	console.log(req.body);
	res.json(req.body);
})

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

