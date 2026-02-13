import {readline} from "readline/promises";

async function maiidojaras() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    const minTemp = await rl.question("Minimum hőmérséklet: ");
    const maxTemp = await rl.question("Maximum hőmérséklet: ");
    const weather = await rl.question("Időjárás: ");
    rl.close();
}

maiidojaras();
