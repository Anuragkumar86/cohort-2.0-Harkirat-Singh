const express = require("express");

const app = express();
const port = 3001;
function product(n){
    return n * n;
}

app.get('/', (req, res)=>{

    const n = req.query.n;
    let ans = product(n);

    res.send("Your product is: "+ ans);
})

app.listen(port, ()=>{
    console.log(`I am listening at port ${port}`)
})