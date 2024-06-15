import rawData from "./data/questions.test.json";
import { Question } from "./interfaces/Question";
import { Quiz } from "./models/Quiz";
import { Message } from "./models/Message";
import { Game } from "./models/Game";
import { CLI } from "./utils/CLI";


const questions:Question[] = rawData;

const quiz = new Quiz(questions);
const message = new Message(CLI);
const game = new Game(quiz, message, CLI);

game.start();

