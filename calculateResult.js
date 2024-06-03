console.log( "A" - "B" + 2);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';