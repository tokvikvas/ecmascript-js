const currentDate = () => new Date().toLocaleDateString('en-US');
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;