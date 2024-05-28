const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;