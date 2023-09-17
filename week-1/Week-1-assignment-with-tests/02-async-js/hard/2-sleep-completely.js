/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of 
milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const start = new Date().getTime();
    let currentTime = start;
  
    while (currentTime - start < seconds * 1000) {
      currentTime = new Date().getTime();
    }

    // If we use setTimeout instead of this, the thread will not remain busy. 
}
console.log("Start");
sleep(3);
console.log("End");