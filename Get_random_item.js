const goToTop = () => window.scrollTo(0, 0);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();