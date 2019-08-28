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


    //updating the List
    const form = document.getElementById("form2");
    const input = document.getElementById("form2Input");
    const list = document.getElementById("list");

    form.addEventListener("submit", ev => {
        ev.preventDefault();

        if(input.value && input.value.length > 0){
            //create the new element
            let listItem = document.createElement("li");

            //add a class
            listItem.classList.add("listItem");

            //for incrementing IDs (which is not usually a stellar idea), get the number of children
            var id = list.childElementCount + 1;
            listItem.id = `item${id}`

            //actually set the text value
            listItem.innerText = input.value;

            //add the element to the list
            list.appendChild(listItem);

            //rest input
            input.value = "";
        }
    })

    //Now imagine this kind of event listener for several things, or a more complex element needing to be added

    //For something truly horrifying: https://github.com/Galvanize-Game-Gallery/game-log-front-end/blob/master/src/newlibgame.js
    //This code creates a table dynamically from a search, for each item it finds we need to dynamically create a table row with a few elements in it
    //In addition we need an event listener on each row to be able to add this game to our game library
    //clever, but disgusting.... who wrote this garbage? 
}
    
module.exports = {init}