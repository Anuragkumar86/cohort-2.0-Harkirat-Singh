import { Admin } from "@repo/ui/admin";
import { InputBox } from "@repo/ui/input-box";

export default function(){
    return <div>
        hi from admin
        <Admin/>
        <InputBox>
         name
        </InputBox>
    </div>
}