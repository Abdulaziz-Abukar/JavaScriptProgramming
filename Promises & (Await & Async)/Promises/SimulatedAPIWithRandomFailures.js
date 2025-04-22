const fetchUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.7) {
                resolve("User data received.");
            } else {
                reject("API error");
            }
        }, 1500);
    });
}


const fetchUserDataWithRetry = attempts => {
    return new Promise((resolve, reject) => {
        function attempt() {
            if (Math.random() < 0.7) {
                resolve("User data received.")
            } else if (attempts > 0) {
                attempts--;
                setTimeout(() => {
                    console.log(`Retrying... Attempts left: ${attempts}`)
                    attempt();
                }, 1500)
            } else {
                reject("API Error. Tried all attempts.")
            }
        }

        attempt();
    })
}

fetchUserDataWithRetry(3)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })