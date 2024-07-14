const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const channel = getChannel(computedAppVersion);