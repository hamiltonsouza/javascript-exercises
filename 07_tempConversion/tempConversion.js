const convertToCelsius = function(fahrenheitTemperature) {

  let celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
  var roundedCelciusTemperature = Math.round(celsiusTemperature * 10) / 10
  return roundedCelciusTemperature;

};

const convertToFahrenheit = function(celsiusTemperature) {

  let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
  var roundedFahrenheitTemperature = Math.round(fahrenheitTemperature * 10) / 10;
  return roundedFahrenheitTemperature;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
