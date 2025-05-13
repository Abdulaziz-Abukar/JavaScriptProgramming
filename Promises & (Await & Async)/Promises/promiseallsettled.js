const promiseOne = new Promise(resolve => { resolve("Success!") });
const promiseTwo = new Promise((resolve, reject) => { reject("Error, 404") });
const promiseThree = new Promise(resolve => { resolve("Success again!") });

Promise.allSettled([promiseOne, promiseTwo, promiseThree])
    .then(result => {
        console.log(result);
    })