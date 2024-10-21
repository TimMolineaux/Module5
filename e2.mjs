import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let figuur = await userInput.question("Welke figuur wil je berekenen? ");

switch (figuur){
    case 'vierkant':
    case 'Vierkant':
        let zijde1 = parseFloat(await userInput.question("Vul de lengte van een zijde in: "));
        let zijde2 = zijde1;
        console.log(rechthoek(zijde1, zijde2));
        break;
    case 'driehoek':
    case 'Driehoek':
        let basis = parseFloat(await userInput.question("Vul de basis in: "));
        let hoogte = parseFloat(await userInput.question("Vul de hoogte in: "));
        console.log(rechtoek(basis, hoogte));
        break;
    case 'cirkel':
    case 'Cirkel':
        let straal = parseFloat(await userInput.question("Vul de lengte van de straal in: "));
        console.log(cirkel(straal));
        break;
        
}

function cirkel (straal, pi = Math.PI){
    let resultaat = pi * straal * straal;
    return resultaat;
}

function driehoek (basis, hoogte){
    let resultaat = basis * hoogte /2;
    return resultaat;
}

function rechthoek (zijde1, zijde2){
    let resultaat = zijde1 * zijde2;
    return resultaat;
}

process.exit();