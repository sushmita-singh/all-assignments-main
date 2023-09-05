/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

const { start } = require("repl");

function sleep (seconds) {
    // SetTimeout works same as this function below
    // setTimeout(()=> {}, seconds * 1000);
    var startTime = Date.now();
    while(Date.now() - startTime < seconds * 1000) {
        // Do nothing
    }
}

sleep(5);