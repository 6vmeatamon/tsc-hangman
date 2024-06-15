import { Question } from "/app/src/interfaces/Question";

export class Quiz {
    questions: Question[];
    constructor(questions: Question[]) {
        this.questions = questions;
    }
    // ランダムに質問を取得して、その質問をリストから削除。
    getNext(): Question {
        const idx = Math.floor(Math.random() * this.questions.length);
        const [question] = this.questions.splice(idx, 1);
        return question;
    }
    hasNext():boolean {
        return this.questions.length > 0;
    }
    lefts():number {
        return this.questions.length;
    }
}