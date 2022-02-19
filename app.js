var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send('Hello world');
});


const port = process.env.port || 8081;
app.listen(port,()=>console.log(`The server is running on port ${port}`));
