const convertToCelsius = function(degreesFahrenheit) {
  let degreesCelsius = ((degreesFahrenheit - 32) * 5/9).toFixed(1);
  return Number(degreesCelsius); 
};

const convertToFahrenheit = function(degreesCelsius) {
  let degreesFahrenheit = ((degreesCelsius * 9/5) + 32).toFixed(1);
  return Number(degreesFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
