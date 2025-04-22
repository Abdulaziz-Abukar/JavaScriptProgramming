function fakeFetch(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success === true) {
                resolve("Data fetched!")
            } else {
                reject("Failed to fetch.")
            }
        }, 3000)
    })
}

fakeFetch(true)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error(error)
    });

fakeFetch(false)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error(error)
    });