const express = require('express')
const path=require('path')

const app = express()
app.use(express.static('./chart'))
app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:'src'})
})

app.listen(process.env.PORT|| 4000,()=>{
    console.log("Listening")
})