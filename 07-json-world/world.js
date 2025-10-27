import fs from "fs"; 


//needs to:
//read json file from disk, 
//Parses the JSON into a JavaScript object
//prints out some interesting subset of the data
let data = fs.readFileSync('./world.json', "utf-8"); // read json file
console.log(data)
const javaScript_object = JSON.parse(data) //parses into js object
console.log(javaScript_object.towns)



console.log(javaScript_object);


// This sample program will keep track of how many times this script
// has ever been run. It stores the number of times a file has been
// run inside of a file it creates and then reads named "program_count.txt".

