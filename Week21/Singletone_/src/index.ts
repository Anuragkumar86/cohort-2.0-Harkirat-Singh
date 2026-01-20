import { game } from "./store";
import { gameLogger } from "./logger";

gameLogger();

game.push({
    id: "1234",
    whilePlayerName: "Anurag",
    blackPlayerName: "Ansh",
    moves: ["e1", "e2"]
})
