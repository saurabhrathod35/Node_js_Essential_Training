var http = require('http');
var server = http.createServer((req,res)=>{
    console.log(req.method); 
    if(req.url == "/" && req.method=="POST"){
        res.end("hello"+req.method)
    }
    if(req.url == "/user"){
        res.end("hello users"+req.method)
    }

    if(req.url == "/order"){
        res.end("all order"+req.method)
    }
});

server.listen(3000)
console.log("server start");


