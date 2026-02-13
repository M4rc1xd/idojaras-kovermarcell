import { NapiIdojaras } from "./napiIdojaras.js";

const idojarasAdatok = [
    new NapiIdojaras("1", 25, 15, "Napos"),
    new NapiIdojaras("2", 22, 14, "Felhős"),
    new NapiIdojaras("3", 28, 18, "Napos"),
    new NapiIdojaras("4", 20, 12, "Esős"),
    new NapiIdojaras("5", 24, 16, "Részben felhős")
];

idojarasAdatok.forEach((idojaras) => {
    console.log(idojaras.toString());
});