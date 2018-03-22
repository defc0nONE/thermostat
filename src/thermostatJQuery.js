$(document).ready(function() {

  var thermostat = new Thermostat();
  const currentTemp = $('#current_temp');
  const energyUsage = $('#EU_indicator');

  currentTemp.text('Current Temp: ' + thermostat.temperature + 'C');
  energyUsage.text('Energy Usage: ' + thermostat.energyUsage);
  $('#PSM_indicator').text('Power Saving Mode: ' + thermostat.powerSaveMode);

  $('#up').click(function() {
    thermostat.increaseTemp(1);
    updateInterfaceValues();
  });

  $('#down').click(function() {
    thermostat.reduceTemp(1);
    updateInterfaceValues();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateInterfaceValues();
  });

  $('#PSM').click(function() {
    thermostat.togglePowerSave();
    $('#PSM_indicator').text('Power Saving Mode: ' + thermostat.powerSaveMode);
  });

  function updateInterfaceValues() {
    thermostat.currentEnergyUsage();
    $('#current_temp').text('Current Temp: ' + thermostat.temperature + 'C');
    $('#EU_indicator').text('Energy Usage: ' + thermostat.energyUsage);
    $('#current_temp').attr('class', thermostat.energyUsage);
  };

  $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=12379761416befa8f8b7fa740cc99415&units=metric', function(data) {
    $('#weather').append('The current weather is: ' + data.weather[0].main)
  });

})
