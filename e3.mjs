import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let isCelcius;
let temperatuur;

isCelcius = await userInput.question("Welke temperatuur wil je omzetten(c/f)? ");
if (isCelcius == "c" || isCelcius == "C"){
    isCelcius = true
}else{
    isCelcius = false
}

temperatuur = parseFloat(await userInput.question("Vul de temperatuur in: "));

console.log(tempConverter(isCelcius, temperatuur));

function tempConverter(isCelcius, temperatuur){
    if (isCelcius == true){
        let fahrenheit = (temperatuur * 2) + 30;
        return fahrenheit;
    }else{
        let celcius = (temperatuur - 30) / 2;
        return celcius;
    }
}

process.exit();