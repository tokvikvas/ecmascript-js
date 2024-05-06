const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const sumArray = arr => arr.reduce((total, current) => total + current, 0);