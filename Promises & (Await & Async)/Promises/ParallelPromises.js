const getUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("User loaded.")
        }, 1000);
    });
}

const getPosts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve("Post loaded.")
        }, 1500);
    });
}

Promise.all([getUser(), getPosts()]).then((values) => {
    console.log(values);
})