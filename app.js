var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =require("cors")

app.use(cors())

app.use(express.static('SDKAngularSample'));
app.use(bodyParser.json());

const agents = [];

var user_detail={
    user: "testzbacc@email.com",
    password:"supermanZB@01",
} 
app.get('/getAccount', function() {
    
})

app.post('/AgentLogin', function(req, res){
    console.log('AgentLogin: ' + JSON.stringify(req.body));
    const id = 'agent 001'
    agents.push(req.body);
    res.send(id);
})

app.get('/AgentLogin', function(req, res) {
    console.log('Jessie get:' + JSON.stringify(req.body));
    res.send(agents);
})

app.post('/message', function(req, res){
    var obj={};
    console.log('body :'+ JSON.stringify(req.body));
    res.send(user_detail);
})
app.listen(8888);