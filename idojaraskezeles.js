import * as readline from "node:readline/promises";
import fs from "node:fs";
import * as csv from "csv/sync";

async function maiidojaras() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const minTemp = await rl.question("Minimum hőmérséklet: ");
  const maxTemp = await rl.question("Maximum hőmérséklet: ");
  const weather = await rl.question("Időjárás: ");
  rl.close();
}

function beolvas () {
    const data = fs.readFileSync("idojaras.csv", "utf-8");
    const feldolgozott = csv.parse(data, {
        columns: true,
        delimiter: ";",
        skip_empty_lines: true
    });
    console.log(feldolgozott);

}

beolvas();
