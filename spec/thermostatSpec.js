'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increments temperature up by 5 to 25 degrees', function() {
    thermostat.increaseTemp(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it('increments temperature down by 5 to 15 degrees', function() {
    thermostat.reduceTemp(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('cannot go below 10 degrees', function() {
    expect(function() { thermostat.reduceTemp(11); }).toThrow("Minimum temperature is 10 degrees");
  });

  it('toggles power save mode', function() {
    thermostat.togglePowerSave();
    expect(thermostat.powerSaveMode).toEqual(false);
  });

  it('increase the max temperature when power save mode is off', function() {
    thermostat.togglePowerSave();
    expect(thermostat.maxTemperature).toEqual(32);
  });

  it('can toggle back to power saving mode', function() {
    thermostat.togglePowerSave();
    thermostat.togglePowerSave();
    expect(thermostat.powerSaveMode).toEqual(true);
  });

  it('reduces the max temperature back to 25 when power save toggled', function() {
    thermostat.togglePowerSave();
    thermostat.togglePowerSave();
    expect(thermostat.maxTemperature).toEqual(25);
  });

  it('sets the temperature back to 20 when you press reset', function() {
    thermostat.increaseTemp(5);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('cannot go above the max temperature in power saving mode', function() {
    expect(function() { thermostat.increaseTemp(6); }).toThrow("Maximum temperature is 25 degrees");
  });

  it('cannot go above the max temperature with power saving mode off', function() {
    thermostat.togglePowerSave();
    expect(function() { thermostat.increaseTemp(13); }).toThrow("Maximum temperature is 32 degrees");
  });

});
