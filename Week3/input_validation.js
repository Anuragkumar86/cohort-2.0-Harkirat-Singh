const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json())
app.get("/health",(req, res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("The length of kidneys is: "+ kidneyLength);
 
    
})

app.listen(3001, ()=>{
    console.log("You are listining at port 3001");
})