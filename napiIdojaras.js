export class NapiIdojaras {
    constructor(day, maxTemp, minTemp, weather) {
        this.day = day;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.weather = weather;
    }

    toString() {
        return `${this.day}: Max Temp: ${this.maxTemp}°C, Min Temp: ${this.minTemp}°C, Weather: ${this.weather}`;
    }
}