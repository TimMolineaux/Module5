import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Vul een getal in: "));

somVanDelers(getal);

function somVanDelers(getal) {
    let som = 0;

    for (let i = 1; i < getal; i++) {
        if (getal % i == 0) {
            som += i;
        }
    }
    console.log(som);
}

process.exit();