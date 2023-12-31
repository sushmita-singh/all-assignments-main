/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    var startTime = Date.now();
    waitOneSecond().then(waitTwoSecond().then(waitThreeSecond().then(() => {
        console.log("All executed");    
        var endTime = Date.now();
        console.log("Time taken", endTime-startTime, "ms");
    })));

}

calculateTime();