const express = require('express');
const app = express();


app.set("view-engine","ejs");

app.get('/',(req,res) =>{
    res.send("ok");
})

app.listen(3000,function() {
    ('Listening to port 3000')
})