const merge = (a, b) => a.concat(b);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());