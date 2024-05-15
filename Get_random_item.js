const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const goToTop = () => window.scrollTo(0, 0);
const uniqueArray = arr => [...new Set(arr)];