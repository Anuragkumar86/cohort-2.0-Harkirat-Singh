const express = require("express");

const app = express();

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "Anurag" || password != "pass"){
        res.status(405).json({
            'msg': "Something input is wrong"
        })
        return
    }
    next();
}
function kidneyMiddleware(req, res, next){
    const kidneyID = req.query.kidneyID
    if(kidneyID != 1 && kidneyID != 2){
        res.status(403).json({
            'msg': "Something input is wrong"
        })
    }
    next();
}

app.get("/health",userMiddleware, kidneyMiddleware, (req, res)=>{

    res.send("Congratulation You are healthy...")
})

app.listen(3000, ()=>{
    console.log("You are listining at port 3000");
})