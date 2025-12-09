
//we are going for my servser to adams server back to server (have four different domain/worlds talking to each other)



//translating data into this object format
//concepsualy if you are tyring to a card html to display a perosn user name fav color etc
async funtion getWorldInfo(url){

    if (url.chartAt(url.length-1) == "/") {
        url.removeCharAT(0, url.length-1);
        //slice is undestructive (what does this mean?)

    }
   
    let reponse = await fetch(`$(url)/world`)
    let json = await response.json();
    console.log(json);

}


const SHEET_ID = 
const SHEET_URL = https:"//docs.google.com/spreadsheets/d/1VQUTyXlevI8XYFwqfykmkx032wNMPWE9PsnkVOAeixE/edit?usp=sharing"

//this is being VERY MANUAL ABT EVERYTHING
async funtion fetchAndParseSheet() {
    try {
        const res = await fetch(SHEET_URL);
        const text = await res.text();

        let lines = text.split("\n");
        let headers = lines[0].split(",");
        let studentInfo = [];
        for (let i = 1; i < lines.lebght; i++) {

            let line = lines[1].trim();
            let entries = line.split(",");
            for (let j = 0; j < entries.length; j++){
                studentInfo[headers[j].trim()] = entries[j] //when you index the obj you do the processing
                }
                studentInfos.push(student)
            }
            for (let student of studentInfos) {
                if (student["render"] != '' && student["cors"] === "1") {
                    console.log(`${student["first"]}'s world: `)
                    let url = student["render"]
                    let response = await gotWorldInfo(url);
                    let worldJSON = response.json();
                    console.log(worldJSON)

                    //console.log(student["First"]);
                }
            }
        };
        console.log(lines)



} catch{

}

//clever way of doing it: checkout .splice
const lines = text,trim().split("\n") // getting last first and rending
const headers = lines[0].split(",");

//map: for every entry in the array make a new array and transform each array in every entry in some way which is what that => does
const data = lines.slice(1).map(line => {
    const values = line.split(",");
    return Object.fromEntries(headers.map((h, 1) => [h, values[i]])); //built and obect from this aray of aarrays 
    //fromEntries -> builds objs from arrays of arrays
});//give me everything stating at lie 1 so it is ignorung headers which are index 0


//third way
//npm install csv-parse
import {parse} from "csv-parse/sync";
import test from "node:test"
const records = parse
//this si all in the backend,node end what if you wanted to parse only frontedn and use vanilla js