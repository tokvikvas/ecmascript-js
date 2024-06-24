const buildOutputPath = path.join(repositoryRootPath, 'out');
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const getRandomBoolean = () => Math.random() >= 0.5;