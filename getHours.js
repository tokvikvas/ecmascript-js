const goToTop = () => window.scrollTo(0, 0);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const result = await makeHttpRequest(url);
const channelName = getChannelName(channel);
const isWeekday = (date) => date.getDay() % 6 !== 0;