const express = require("express")

const bodyparser = require("body-parser")

const port = 3000

const app = express();

app.use(bodyparser.json());

app.get('/', function(req, res){
    res.send("Hello I am From Express")
    console.log(req.body.message);

    // res.json({
    //     name: "Anurag",
    //     Vill: "Sonpa" ,
    //     ID : 23455
    // })
})

app.listen(port , ()=>{
    console.log(`App is listining at port ${port}`)
})