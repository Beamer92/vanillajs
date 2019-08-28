const utils = require('./utils');

const init = () => {
    utils.formatTime();

    //Why isn't this is formatTime if I do it in both places?
    // Because I don't know that the id for that field is going to be called 'clock1' in every page
    // even though functionality is identical, it's technically a unique element
    const time = document.getElementById("clock1");
    setInterval(() => {
        time.value = utils.formatTime();
    }, 1000);

    const nameSpan = document.getElementById("nameSpan");
    nameSpan.innerText = "The Dude";
}
    
module.exports = {init}