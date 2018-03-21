class Thermostat {
  constructor() {
    this.temperature = 20
    this.minTemperature = 10
    this.maxTemperature = 25
    this.powerSaveMode = true
    this.energyUsage = 'Medium'
  }

  increaseTemp(number) {
    var result = this.temperature + number

    if (result > this.maxTemperature && this.powerSaveMode === true) {
      throw("Maximum temperature is 25 degrees")
    } else if (result > this.maxTemperature && this.powerSaveMode === false) {
      throw("Maximum temperature is 32 degrees")
    } else {
    this.temperature += number
    }
  }

  reduceTemp(number) {
    var result = this.temperature - number

    if (result < this.minTemperature) {
      throw("Minimum temperature is 10 degrees")
    } else {
      this.temperature -= number
    }
  }

  togglePowerSave() {
    if (this.powerSaveMode === true) {
      this.powerSaveMode = false
      this.maxTemperature = 32
    } else {
      this.powerSaveMode = true
      this.maxTemperature = 25
    }
  }

  reset() {
    this.temperature = 20
  }

  currentEnergyUsage() {
    if (this.temperature < 18) {
      this.energyUsage = 'Low'
    } else if (this.temperature < 25) {
      this.energyUsage = 'Medium'
    } else if (this.temperature < 32) {
      this.energyUsage = 'High'
    }
    return this.energyUsage
  }

}
