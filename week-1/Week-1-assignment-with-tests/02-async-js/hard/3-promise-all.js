/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("waitOne Second");
        },1000);
    });
}

function waitTwoSecond() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("waitTwo Second");
        },2000);
    });
}

function waitThreeSecond() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("waitThree Second");
        },3000);
    });
}

function calculateTime() {
    var startTime = new Date.now();
    waitOneSecond().then(waitTwoSecond().then(waitThreeSecond().then(() => {
        console.log("All executed");
    })));
    var endTime = new Date.now();
    console.log("Time taken", endTime-startTime);
}

calculateTime();