const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
console.log(1 +  +"2" + "2");
const minNumber = arr => Math.min(...arr);