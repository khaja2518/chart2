const express = require('express')
const path=require('path')
const cors = require('cors')
const app = express()

app.all('/*', cors())

app.use(express.static('./dist/chart'))
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/chart/'}),
);

app.listen(process.env.PORT || 8080,()=>{
    console.log("Listening")
})