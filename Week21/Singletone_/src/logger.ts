
import { game } from "./store";

export function gameLogger(){
    setInterval(() => {
        console.log(game)
    }, 4000);
}