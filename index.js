const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('<b>Hello there Aditya</b>')
    })
    
    app.listen(3000)
