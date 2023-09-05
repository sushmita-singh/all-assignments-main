var time;

setInterval(() => {
    console.clear();
    time = new Date(); 
    var amPm = parseInt(time.getHours())>12 ? "pm":"am";
    console.log(time.toTimeString().substring(0,8));
    console.log(time.toLocaleTimeString().substring(0,8)+amPm);
}, 1000);