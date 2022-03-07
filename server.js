const express = require('express')
const path=require('path')

const app = express()
app.use(express.static(__dirname+'/dist/chart'))
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/src/index.html'))
})

app.listen(4000,()=>{
    console.log("Listening")
})