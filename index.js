import { NapiIdojaras } from "./napiIdojaras.js";
import { maiidojaras, beolvas } from "./idojaraskezeles.js";


let idojarasAdatok = beolvas();

const ujIdojaras = await maiidojaras();

idojarasAdatok.push(ujIdojaras);

console.log("Fájl adatok:");
for (const idojaras of idojarasAdatok) {
    console.log(idojaras.toString());
}

const legmelegebb = idojarasAdatok.reduce((max, current) => 
    current.maxTemp > max.maxTemp ? current : max
);
console.log("\nLegmagasabb maximum hőmérsékletű nap:");
console.log(legmelegebb.toString());