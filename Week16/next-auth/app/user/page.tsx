import { Appbar } from "@/components/AppBar";
import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/route";

export default  async function(){
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        user page
        {/* <Appbar/> */}
        {JSON.stringify(session)}
    </div>
}