import { Question } from "/app/src/interfaces/Question"

export class Stage {
    answer: string; // 解答の状態（例：ty_escri_t）
    leftAttempts: number = 5;
    question: Question;

    constructor(question: Question) {
        this.question = question;
        this.answer = new Array(question.word.length).fill("_").join(""); 
        // new Arrayで指定の長さの空の配列を作成。fillですべての要素を埋める。joinは配列の要素を連結して新しい文字列にする。
    }

    decrementAttempts(): number{
        return --this.leftAttempts ;
    }

    updateAnswer(userInput: string = ""): void {
        if(!userInput) return;

        const regex = new RegExp(userInput, "g"); // 入力を正規表現のパターンとして利用。
        const anserArry = this.answer.split(""); // 文字列を配列に。

        let matches: RegExpExecArray | null; // 正規表現での検索結果を格納する変数。

        while ((matches = regex.exec(this.question.word))) {
            const foundIdx = matches.index;
            anserArry.splice(foundIdx, userInput.length, ...userInput);

            this.answer = anserArry.join("");
        }
    }

    isCorrect(): boolean {
        return this.answer === this.question.word;
    }
    isIncludes(userInput:string): boolean {
        return this.question.word.includes(userInput);
    }
    isTooLong(userInput:string): boolean {
        return userInput.length > this.question.word.length;
    }
    isGameOver(): boolean{
        return this.leftAttempts === 0;
    }
}