const merge = Object.assign({}, obj1, obj2);
const goToTop = () => window.scrollTo(0, 0);
const timeFromDate = date => date.toTimeString().slice(0, 8);