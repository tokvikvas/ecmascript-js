const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const fullName = name || 'buddy';