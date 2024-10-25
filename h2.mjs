import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question("Vul de maand in: ");
let jaar = await userInput.question("Vul het jaar in: ");

console.log(dagenMaand(maand, jaar));

process.exit();

function dagenMaand(maand, jaar){
    let dagen;

    switch (maand){
        case 'january':
        case 'maart':
        case 'mei':
        case 'juli':
        case 'augustus':
        case 'oktober':
        case 'december':
            dagen = 31;
            break;
        case 'april':
        case 'juni':
        case 'september':
        case 'november':
            dagen = 30;
            break;
        case 'february':
            dagen = 28;
            break;
    }

    if (jaar % 4 == 0 && jaar % 100 != 0 || jaar % 400 == 0){
        dagen += 1;
    }

    return dagen;
}