'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increments temperature up by 1 to 21 degrees', function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21);
  });

  it('increments temperature down by 1 to 19 degrees', function() {
    thermostat.reduceTemp();
    expect(thermostat.temperature).toEqual(19);
  });

});
