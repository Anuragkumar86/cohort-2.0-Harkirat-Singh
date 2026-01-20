
import { createClient } from "redis";

const client = createClient();

async function init(){
    await client.connect()
    
    try{

        while(true){

            const ans = await client.brPop("submission", 0)
            console.log(ans)
            await new Promise((request) => setTimeout(request, 2000))
        }
    }
    catch(err){
        console.log("error occured: ", err);
    }

}

init();