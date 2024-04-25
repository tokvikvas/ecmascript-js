const isEmptyObject = obj => Object.keys(obj).length === 0;
const lastElement = arr => arr[arr.length - 1];
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isArray = (arr) => Array.isArray(arr);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));