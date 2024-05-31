const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());