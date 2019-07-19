const axios = require('axios');
const formatTime = require('./index.js');

window.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Content has been loaded, you may now start using JS");

    const time = document.getElementById("clock1");

    setInterval(() => {
        time.value = formatTime();
    }, 1000);
})