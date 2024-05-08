const merge = [...new Set([...a, ...b])];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);