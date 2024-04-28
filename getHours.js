const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const goToTop = () => window.scrollTo(0, 0);
const uniqueArr = (arr) => [...new Set(arr)];
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);