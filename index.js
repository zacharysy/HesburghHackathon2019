const express = require('express')
const app = express()

const fs = require("fs")
const port = 3000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res)=>{

    res.status(200);
    res.send(data);
})
