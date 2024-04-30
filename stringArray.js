const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const minNumber = arr => Math.min(...arr);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));