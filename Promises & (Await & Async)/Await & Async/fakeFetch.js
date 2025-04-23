function fakeFetch(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        success ? resolve("Data fetched!") : reject("Failed to fetch.");
      }, 1000);
    });
}


async function run() {
    try {
        const response = await fakeFetch(true);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

run();