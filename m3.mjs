import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let nummer = random(1, 10);
let gok;
let levens = 3;

do{
    gok = await userInput.question("Raad een getal tussen 1 en 10 in: ");

    if (nummer == gok){
        console.log("Je hebt juist geraden!");
    }else if (nummer < gok){
        console.log("Je getal lag hoger dan het juiste getal");
        levens -= 1;
        console.log(`Je hebt nog ${levens} levens over.`);
    }else if (nummer > gok){
        console.log("Je getal lag lager dan het juiste getal");
        levens -= 1;
        console.log(`Je hebt nog ${levens} levens over.`);
    }
}while (gok != nummer && levens != 0)

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

process.exit();