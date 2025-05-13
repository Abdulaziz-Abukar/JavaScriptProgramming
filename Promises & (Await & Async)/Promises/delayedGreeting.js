const delayedGreeting = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, Abdulaziz!");
    }, 3000);
});

delayedGreeting.then((message) => {
    console.log(message);
})