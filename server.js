const express = require('express')
const path=require('path')
const cors = require('cors')
const app = express()

app.all('/*', cors())

app.use(express.static(__dirname+'./dist/chart'))
app.get('/*',(req,res)=>{
    res.sendFile('index.html',{root:'src/'})
})

app.listen(4000,()=>{
    console.log("Listening")
})