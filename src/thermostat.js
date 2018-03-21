class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  increaseTemp(number) {
    this.temperature += number;
  }

  reduceTemp(number) {
    this.temperature -= number;
  }
}
