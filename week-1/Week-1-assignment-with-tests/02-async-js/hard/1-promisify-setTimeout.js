/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        if(n < 0) {
            reject(new Error("Wrong Input"));
        }

        setTimeout(() => {
            resolve(`Promise returned after ${n} seconds`);
        }, n * 1000);
    })
}

wait(10).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})