var express=require("express");
var app=express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var mongoURL = 'mongodb://localhost:27017/userdb';
app.use(express.static(__dirname + '/public'));

//user Login
app.get("/userLogin",function(req,res){
	//variable creation
	var userName=req.query.userName
	var password=req.query.password
	MongoClient.connect(mongoURL, function(err, db) {
                 
		//data base object creation
		var dataBase=db.db("userdb")
		//collections object creation
		var coll=dataBase.collection("user")
		coll.find({"userName":userName,"password":password}).toArray(function(err,doc){
				if(doc[0]!=undefined){
					res.send(doc)
					
				}else{
					res.send("error")
				}
		})
		db.close();
	})
});

//user Register
app.get("/userRegister",function(req,res){
	var dr={"userName":req.query.userName,"password":req.query.password,"fullName":req.query.fullName}
	MongoClient.connect(mongoURL, function(err, db) {
		//data base object creation
		var dataBase=db.db("userdb")
		//collections object creation
		var coll=dataBase.collection("user")
		//data insertion
		coll.findOne({"userName":dr.userName},function(err,doc){
			if(doc){
				res.send("user name already exists")
				console.log("user name already exists")
			}else{
				coll.insert(dr,function(err,doc){
					if(doc){
						res.send("success")
					}else{
						res.send("error")
					}
					db.close();
				})
			}
		})
		
	})
})


 var Api = app.listen(5000, function() {
       
        console.log('Server started.......');
    })