import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Vul een getal in: "));

console.log(factorial(getal));

function factorial(getal){
    if (getal <= 0){
        return console.error("Vul een groter getal dan 0 in");
    }

    let factorial = 1;
    for (let i = 2; i <= getal; i++){
        factorial *= i;
    }

    return factorial;
}

process.exit();