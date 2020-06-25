
const express = require('express')
const app = express();
const router = require('./router');

app.use("/",router);

app.listen(3100,function(){
    console.log("server runing at port 3100");
})