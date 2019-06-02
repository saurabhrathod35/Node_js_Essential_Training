const http = require('http');
const data = require('./data/inventory');
const port = 3000;
const server = http.createServer(function (req, res) {
    console.log(`METHOD:- ${req.method} URL:- ${req.url}`);
    
    if (req.url == "/all") {
        res.end(JSON.stringify(data))
    }

    else if (req.url == "/" && req.method == "GET") {
        res.end(JSON.stringify({ "language": "node" }))
    } 

    else if (req.url == "/instock") {
        res.end(JSON.stringify(data.filter(item => {
            return item.avail == "In stock"
        })));
    }

    else if (req.url == "/onbackorder") {
        res.end(JSON.stringify(data.filter(item => {
            return item.avail == "On back order";
        })));
    }

    else if (req.url == "/outstock") {
        res.end(JSON.stringify(data.filter(item => {
            return item.avail == "Out Stock"
        })));
    }
    else{
        res.end("route not found");
    }
});

server.listen(port);
console.log('server listen on',port);
