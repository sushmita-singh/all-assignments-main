var i = 0;

function counter () {
    console.clear();
    console.log(i);
    i++;
    setTimer();
}

function setTimer() {
    setTimeout(counter, 1000);
}

setTimer();