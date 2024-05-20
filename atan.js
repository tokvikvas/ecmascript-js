const intermediateAppPath = path.join(buildOutputPath, 'app');
const resultingPromises = urls.map((url) => makHttpRequest(url));