function formatTime(){
    d = new Date();
    var h=d.getHours(),m=d.getMinutes();
    if(h < 10){
      h = '0'+h;
    }
    if(m < 10){
      m = '0'+m;
    }
    return h+':'+m;
  }

window.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Content has been loaded, you may now start using JS");


    const time = document.getElementById("clock1");

    setInterval(() => {
        time.value = formatTime();
    }, 1000);

    let counter = 0;
    const chgPic = document.getElementById("btnpic");
    const picture = document.getElementsByClassName("mainimg")[0];

    if(chgPic && picture){
        chgPic.addEventListener("click", (ev) => {
            ev.preventDefault();

            console.log("Clicked the button")

            if(counter % 2 === 1){
                picture.src = "http://31.media.tumblr.com/3a8206a9e2faa621975381f0e44c9453/tumblr_nah5b6NJcZ1qaqps8o7_r1_500.jpg";
            }    
            else {
                picture.src = "https://www.mypokecard.com/my/galery/v04NmcoGiW.jpg";
            }
            counter++;
        })
    }
})

module.exports = {formatTime}


