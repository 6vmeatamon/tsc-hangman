import { Stage } from "@src/models/Stage";

export interface GameState {
    stage: Stage;
    done: boolean;
}
