
import {createClient} from "redis"
import { promise } from "zod";

const client = createClient()

async function main(){
    await client.connect();
    while(true){
        const response = await client.brPop("submission",0)
        console.log(response);
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("PROCEEDED USER SUBMISSION SUCCESSFULLY")
    }

}
main()