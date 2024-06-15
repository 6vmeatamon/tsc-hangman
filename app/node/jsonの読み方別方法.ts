import rawData from "./src/data/questions.test.json";

// ↑以外に、fs.readFileSyncでも読めるけど。。。
// JSON.parse()関数の戻り値が any 型となり型精査されない。P217
// JSON.parse関数は、文字列から、Javascriptのオブジェクト型に変換する。ただAny型が戻り値。 
import fs from "fs";
import path from "path";
console.log(process.cwd());

const rawDataWithFs = fs.readFileSync(path.join(__dirname,"data/questions.test.json"), "utf-8");
const questionsWithJsonParse: Question[]= JSON.parse(rawDataWithFs);
console.log(typeof(JSON.parse(rawDataWithFs)));

interface Question {
    word:string;
    hint:string;
}


