const convertToCelsius = function(fahrenheitTemperature) {

  let celsiusTemperature = (fahrenheitTemperature - 32) * 5 / 9;
  return celsiusTemperature;

};

const convertToFahrenheit = function(celsiusTemperature) {

  let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
