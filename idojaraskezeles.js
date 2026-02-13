import * as readline from "node:readline/promises";
import fs from "node:fs";
import * as csv from "csv/sync";
import { NapiIdojaras } from "./napiIdojaras.js";

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


function beolvas() {
  const fileContent = fs.readFileSync("idojaras.csv", "utf-8");
  const records = csv.parse(fileContent, {
    columns: true,
    delimiter: ";",
    skip_empty_lines: true
  });
  for (const row of records) {
    const napiIdojaras = new NapiIdojaras(
      row.nap,
      parseInt(row.max),
      parseInt(row.min),
      row["időjárás"]
    );
    console.log(napiIdojaras.toString());
  }
}

beolvas();
