
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


  module.exports = {formatTime};