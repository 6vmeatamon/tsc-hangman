import { UserInterface, Color } from "@src/interfaces/UserInterface";
import chalk from "chalk";
import figlet from "figlet";
import readLinePromises  from "readline/promises";

// readLinePromisesインタフェースのインスタンスを作成。
// ここでのインタフェースはTypeScriptのインタフェースの話ではないので注意。
const rl = readLinePromises.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export const CLI: UserInterface = {
    async input() {
        const input = await rl.question("文字または単語を推測してください：");
        return input.replaceAll(" ","").toLowerCase();
    },
    clear() {
        console.clear();
    },
    destroy() {
        rl.close();
    },
    output(message: string, color: Color = "white") { // colorのデフォルト値をwhiteに。
        console.log(chalk[color](message), "\n"); 
        // ↑ 動的にプロパティ（color）を指定するため、chalk[color]のようなブラケット構文を利用する。
    },
    outputAnswer(message:string) {
        console.log(figlet.textSync(message, {font: "Big"}),"\n");
    }
};