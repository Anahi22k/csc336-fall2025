
import * as fs from 'fs';

console.log("Helo node!");
let randomNum = [];


//read randomNumbers.txt
let fileContents = fs.readFileSync("./randomNum.txt", "utf8");
console.log(fileContents[0]);

for (i = 0; i < 10; i++) {
    let rand = Math.random();
    randomNum[i] = rand;
    console.log(randomNum[i]);

}

let str = "";
for (let rand of randomNum){
    str += rand + "\n";
}

fs.writeFileSync("randomNum.txt", str);
//FileSystem.writeFileSync("randomNumbers.txt", "writing some text")

so you need to read file and then parse it
