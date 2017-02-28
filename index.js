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

app.listen(3000 , function(){
	console.log('running');
});
