import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = await userInput.question("Vul jouw naam in: ");
begroeting(naam);

function begroeting(naam){
    return console.log(`Welkom ${naam}`);
}

process.exit();