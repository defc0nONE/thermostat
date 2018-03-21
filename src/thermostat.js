class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
  }

  increaseTemp(number) {
    this.temperature += number;
  }

  reduceTemp(number) {
    var result = this.temperature - number;

    if (result < this.minTemperature) {
      throw("Minimum temperature is 10 degrees");
    } else {
      this.temperature -= number;
    }
  }
}
