var express = require('express');
var inventory = require('./data/inventory');
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(JSON.stringify(inventory))
})

app.get('/instock', (req, res) => {
    res.send(JSON.stringify(inventory.filter(item => {
        return item.avail == "In stock"
    })))
})

app.get('/inventory/:id', (req, res) => {
    console.log(req.params.id);
    res.send(JSON.stringify(inventory.find(item => {
        return item.id == req.params.id
    })));
})


app.post('/inventory', (req, res) => {
    console.log(req.body)
    inventory.push(req.body)
    res.send(JSON.stringify(inventory));
})

app.delete('/inventory/:id',(req,res)=>{
    var tmp = inventory.filter(item=>{
        return item.id !== req.params.id
    })
    inventorxy= tmp
    res.send(JSON.stringify(inventory));
})
 

app.listen(3000)