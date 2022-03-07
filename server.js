const express = require('express')
const path=require('path')

const app = express()
app.use(express.static(__dirname+'/dist/chart'))
app.get('/*',(req,res)=>{
    res.sendFile('index.html',{root:'src'})
})

app.listen(4000,()=>{
    console.log("Listening")
})