/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const { rejects } = require("assert");
const { resolve } = require("path");


function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Function one executed");
        }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Function two executed");
        }, 2000);
    })

}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Function three executed");
        }, 3000);
    })
}

function calculateTime() {
    waitOneSecond().then(() => {
        console.log("First Promise Fulfilled");
        waitTwoSecond()
    }).then(()=> {
        console.log("Second Promise Fulfilled");
        waitThreeSecond()
    }).then(() => {
        console.log("All Promises Fulfilled");
    });
}

calculateTime();