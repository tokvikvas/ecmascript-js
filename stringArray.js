const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());