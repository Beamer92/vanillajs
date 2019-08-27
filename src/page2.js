const utils = require('./utils');

const init = () => {
    utils.formatTime();

    const time = document.getElementById("clock1");

    setInterval(() => {
        time.value = utils.formatTime();
    }, 1000);
}
    
module.exports = {init}