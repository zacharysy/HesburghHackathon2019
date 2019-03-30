const express = require('express');
const app = express();
const fs = require("fs");
const parse = require('parse');
const port = 3000;


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Routes
app.get('/', (req, res)=>{
    fs.readFile("../frontend/index.html",'utf8',(err,data)=>{
        res.send(data);
    })
})

