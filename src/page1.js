const utils = require('./utils');

const init = () => {
    utils.formatTime();

    const time = document.getElementById("clock1");

    setInterval(() => {
        time.value = utils.formatTime();
    }, 1000);
    
    let toggle = false;
    const chgPic = document.getElementById("btnpic");
    const picture = document.getElementsByClassName("mainimg")[0];
    
    if(chgPic && picture){
        chgPic.addEventListener("click", (ev) => {
            ev.preventDefault();
    
            console.log("Clicked the button")
    
            if(toggle === true){
                picture.src = "http://31.media.tumblr.com/3a8206a9e2faa621975381f0e44c9453/tumblr_nah5b6NJcZ1qaqps8o7_r1_500.jpg";
            }    
            else {
                picture.src = "https://www.mypokecard.com/my/galery/v04NmcoGiW.jpg";
            }
            toggle = !toggle;
        })
    }


}


module.exports = {init}
