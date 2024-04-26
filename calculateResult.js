const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const removeDuplicates = (arr) => [...new Set(arr)];
const isEmptyArray = arr => !arr.length;
const flattenedArray = arr => [].concat(...arr);
const minNumber = arr => Math.min(...arr);