import express from "express"
import {createClient} from "redis"


const app = express();
app.use(express.json());

const client = createClient()
async function Client(){
    try{
        await client.connect();
        console.log("client connected successfully");
    }
    catch(e){
        
        console.log("Error Occured in connecting client");
    }
}
Client();

app.post("/submit", async(req, res) =>{
    const {problemId, userId, code, language} = req.body;
    try{

        await client.lPush("submission", JSON.stringify({problemId, userId, code, language}))
        res.json({
            msg: "Subbmission Done Success"
        })
    }
    catch(e){
        res.json({
            msg: "Submission Not Successfull"
        })

    }
})

app.listen(3000, ()=>{
    console.log("Listening at port 3000")
})