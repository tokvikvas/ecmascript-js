const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};