function checkUsername(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        username === "admin"
          ? resolve("Username valid")
          : reject("Invalid username");
      }, 1000);
    });
}
  
function getToken() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("token_1234");
      }, 1000);
    });
}

async function login(username) {
    try {
        await checkUsername(username);
        const tokenGrabber = await getToken();
        console.log("Login successful. Token:", tokenGrabber);
    } catch (error) {
        console.log("Login failed:", error);
    }
}

login('admin');