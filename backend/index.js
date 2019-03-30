const express = require('express');
const app = express();
const fs = require("fs");
const parse = require('parse/node');
const port = 3000;

parse.initialize('1UL4z4XXj5lcw7FqCZQDi9AEY9oBaCLDU1hlLsDI', 'wCS800zhokit6qVVcY7dvJdunL0yAuIDKe2em9sV');
parse.serverURL = 'https://parseapi.back4app.com/';

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Routes
app.get('/', (req, res)=>{
    fs.readFile("../frontend/index.html",'utf8',(err,data)=>{
        res.send(data);
    })
})
