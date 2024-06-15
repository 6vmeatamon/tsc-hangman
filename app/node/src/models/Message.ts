import { UserInterface } from "@src/interfaces/UserInterface";
import { Stage } from "./Stage";
import { Quiz } from "./Quiz";
import { Question } from "@src/interfaces/Question";

export class Message {
    ui: UserInterface;

    constructor(ui: UserInterface){
        this.ui = ui;
    }

    askQuestion(stage: Stage):void {
        this.ui.output(`Hint: ${stage.question.hint}`, "yellow");
        this.ui.outputAnswer(stage.answer.replaceAll("", " ").trim());
        this.ui.output(`残りの回数：${stage.leftAttempts}`);
    }
    leftQuestions(quiz: Quiz) {
        this.ui.output(`残り、${quiz.lefts()+1} 問！`);
    }
    start() {
        this.ui.outputAnswer("\nGame Start!");
    }
    enterSomething() {
        this.ui.output(`何か文字(半角英字)を入力してください。`, "red");
    }
    notInclude(input: string) {
        this.ui.output(`残念！ "${input}" は単語に含まれていません。`, "red");
    }
    notCorrect(input: string) {
        this.ui.output(`残念！ "${input}" は正解ではありません！`,"red");
    }
    hit(input: string){
        this.ui.output(`お！ "${input}" が Hit!`,"green");
    }
    correct(question: Question) {
        this.ui.outputAnswer(question.word.replaceAll("", " ").trim());
        this.ui.output(`正解！ 単語は "${question.word}" でした！`, "green");
    }
    gameover(question: Question) {
        this.ui.output(`正解は "${question.word}" でした。残念。`);
    }
    gameclear() {
        this.ui.outputAnswer(`Game Clear!\n`);
    }
    end() {
        this.ui.output(`ゲーム終了です。おつかれした！`,"blue");
    }
}