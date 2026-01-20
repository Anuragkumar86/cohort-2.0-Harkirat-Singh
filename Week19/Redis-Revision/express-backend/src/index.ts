import express from 'express'
import {createClient} from 'redis'

const app = express();
app.use(express.json());
const client = createClient();
client.connect()

app.post("/submit", async(req, res) => {
    const {userID, questionID, problem, solution} = req.body
    try{

        await client.lPush("submission", JSON.stringify({userID, questionID, problem, solution}))

        res.status(200).json({
            message: "New Submission Submit Success✅"
        })
    }
    catch(err){
        
        res.status(500).json({
            message: "Error in Submission ❌",
            error: err
        })
    }

})

app.listen(8080, () => {
    console.log("app is listening at port 8080")
})

