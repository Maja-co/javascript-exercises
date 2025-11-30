// Vi bruger math.round for at undgå decimaler

function convertToCelsius(fahrenheit) {
  const result = (fahrenheit - 32) / 1.8;
  return Math.round(result * 10) / 10;
};

function convertToFahrenheit(celsius) {
  const result = (celsius * 1.8) + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
