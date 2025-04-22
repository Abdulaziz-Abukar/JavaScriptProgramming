const delayedResponse = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ms > 2000) {
                reject("Took too long!")
            } else {
                resolve("Done!");
            }
        }, ms);
    });
}

delayedResponse(2100)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })