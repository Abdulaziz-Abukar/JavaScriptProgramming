function chooseNum(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 === 0) {
                resolve(num);
            } else {
                reject("Please choose an even number.");
            }
        }, 2000);
    });
}

chooseNum(2)
    .then((num) => {
        return num * 10
    })
    .then((result) => {
        console.log("Final Result: ", result);
    })
    .catch((error) => {
        console.error("Error found: ", error)
    })