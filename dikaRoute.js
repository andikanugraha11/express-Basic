var express = require('express');
var router	= express.Router();

router.get('/',function(req,res){
	res.send('Root GET');
});

router.post('/',function(req,res){
	res.send('Root POST');
});

router.get('/user',function(req,res){
	res.send('user GET');
});

router.post('/user',function(req,res){
	res.send('user POST');
});

module.exports = router;