import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let nummer = random(1, 10);
let gok = await userInput.question("Raad een getal tussen 1 en 10 in: ");

if (nummer == gok){
    console.log("Je hebt juist geraden!");
}else if (nummer < gok){
    console.log("Je getal lag hoger dan het juiste getal");
}else if (nummer > gok){
    console.log("Je getal lag lager dan het juiste getal");
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

process.exit();