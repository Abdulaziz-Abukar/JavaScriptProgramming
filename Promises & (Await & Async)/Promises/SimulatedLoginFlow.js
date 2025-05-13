const checkUsername = username => {
    return new Promise((resolve, reject) => {
        if (username === 'admin') {
            resolve("Username valid");
        } else {
            reject("invalid username");
        }
    });
}

const getToken = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("token_1234");
        }, 1000);
    });
}

checkUsername('admin')
    .then(getToken)
    .then(result => {
        console.log(`Login successful! Token: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    })


checkUsername('user')
    .then(getToken)
    .then(result => {
        console.log(`Login successful! Token: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    })