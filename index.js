import { NapiIdojaras } from "./napiIdojaras.js";
import { maiidojaras, beolvas } from "./idojaraskezeles.js";


let idojarasAdatok = beolvas();

const ujIdojaras = await maiidojaras();

idojarasAdatok.push(ujIdojaras);

console.log("Fájl adatok:");
for (const idojaras of idojarasAdatok) {
    console.log(idojaras.toString());
}