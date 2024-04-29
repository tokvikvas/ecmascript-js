const merge = Object.assign({}, obj1, obj2);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
console.log(false === '0');