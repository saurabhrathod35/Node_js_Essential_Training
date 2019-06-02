var express = require('express');
var bodyParser = require('body-parser')
var users = require('./data/user');
var app = express();

app.use(bodyParser.json())


app.post('/user', (req, res) => {
    console.log(req.body);

    users.push({
        "userId": 3,
        "jobTitleName": "Project Manager",
        "firstName": "Manas",
        "lastName": "Hanks",
        "preferredFullName": "Tom Hanks",
        "employeeCode": "E4",
        "phoneNumber": "409-2222222",
        "emailAddress": "manas@gmail.com"
    })
    res.send('post user successfully');
})

app.get('/users', (req, res) => {
    res.send(JSON.stringify(users))
})

app.get('/user/:id', (req, res) => {
    console.log(req.params.id);
    var user = users.find(user => {
        return user.userId == req.params.id;
    })
    res.send(JSON.stringify(user || {}))
})

app.patch('/user/:id', (req, res) => {
    console.log(req.body);
    var tmpUsers = users.filter(user => {
        return user.userId !== req.params.id;
    });
    console.log(tmpUsers);
    req.body['userId']=req.params.id;
    tmpUsers.push(req.body)
    users = tmpUsers;
    res.send(JSON.stringify(tmpUsers))
})

app.delete('/user/:id',(req,res)=>{
    var tmpUsers = users.filter(user => {
        return user.userId !== req.params.id;
    }); 
    users = tmpUsers;
    res.send(JSON.stringify(users))
})

app.listen(4000);