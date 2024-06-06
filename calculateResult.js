const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const flattenedArray = arr => [].concat(...arr);