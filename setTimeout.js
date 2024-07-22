const merge = [...new Set([...a, ...b])];
const isWeekday = (date) => date.getDay() % 6 !== 0;
const randomString = () => Math.random().toString(36).slice(2);