class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemperature = 25;
    this.powerSaveMode = true;
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

  togglePowerSave() {
    if (this.powerSaveMode === true) {
      this.powerSaveMode = false;
      this.maxTemperature = 32;
    } else {
      this.powerSaveMode = true;
      this.maxTemperature = 25;
    }
  }

}
