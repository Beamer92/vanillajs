const utils = require('./utils');

const init = () => {
    utils.formatTime();

    const time = document.getElementById("clock1");
    setInterval(() => {
        time.value = utils.formatTime();
    }, 1000);

    //'let' is the basically same as 'var', but 'let' is block scoped and 'var' is function scoped
    // https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/#targetText=var%20and%20let%20are%20both,program%20as%20compared%20to%20let.
    let toggle = false;

    // Getting ahold of HTML elements required searching the DOM (Document Object Model) for that element (hence 'document.xxx'),
    // JQuery is intended to streamline some of this but we're not going to cover jquery here
    const chgPic = document.getElementById("btnpic");
    const picture = document.getElementsByClassName("mainimg")[0];
    
    if(chgPic && picture){
        chgPic.addEventListener("click", (ev) => {
            ev.preventDefault();
    
            if(toggle === true){
                picture.src = "http://31.media.tumblr.com/3a8206a9e2faa621975381f0e44c9453/tumblr_nah5b6NJcZ1qaqps8o7_r1_500.jpg";
            }    
            else {
                picture.src = "https://www.mypokecard.com/my/galery/v04NmcoGiW.jpg";
            }
            toggle = !toggle;
        })
    }

    const nameSpan = document.getElementById("nameSpan");
    nameSpan.innerText = "The Dude";

    const nameInput = document.getElementById("nameInput");
   
    // const colorInput = document.getElementById("colorInput");
    // const body =  document.getElementById("body");

    document.getElementById("form1").addEventListener("submit", (ev) => {
        ev.preventDefault(); //ALWAYS preventDefault on Submit (and others). Submit by default cases a refresh, which we don't want

        if(nameInput.value && nameInput.value.length > 0){
            nameSpan.innerText = nameInput.value;
        }

        // if(colorInput.value && colorInput.value.length > 0){
        //    body.setAttribute("style", `background-color: ${colorInput.value}`)
        // }

        nameInput.value = "";
        // colorInput.value = "";
    })
  
    //So what if we wanted to save these changes? If we navigate to a new page we've got no way to send over our Name to page 2's javascript
    //When page 2 loads, we load in our bundle.js which completely refreshes our Javascript. 
    //So even if we saved our values in an object and we could guarantee our HTML matches across pages, how could we preserve them through a refresh?
    //LocalStorage or Cookies is one way, Sending our data over an API and retrieving it on a page load... But none of these solutions are really seamless or central

    //Let's make a change and implement changing the background color!

}


module.exports = {init}
