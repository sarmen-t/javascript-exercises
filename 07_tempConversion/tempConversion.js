const convertToCelsius = function(temp) {
  conv = (((temp - 32) / 9) * 5)
  if (Number.isInteger(conv))
    return conv
  else{
    return Math.round(conv * 10) / 10
  }
};

const convertToFahrenheit = function(temp) {
  conv = (((temp * 9) / 5) + 32)
  if (Number.isInteger(conv))
    return conv
  else{
    return Math.round(conv * 10) / 10
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
