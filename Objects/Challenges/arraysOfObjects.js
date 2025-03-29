const users = [
    {
      id: 1,
      username: "abdulaziz_23",
      age: 22,
      email: "abdulaziz@example.com",
      isAdmin: false,
      isActive: true
    },
    {
      id: 2,
      username: "layla_dev",
      age: 19,
      email: "layla@example.com",
      isAdmin: true,
      isActive: true
    },
    {
      id: 3,
      username: "khalid99",
      age: 16,
      email: "khalid@example.com",
      isAdmin: false,
      isActive: false
    },
    {
      id: 4,
      username: "nour_84",
      age: 25,
      email: "nour@example.com",
      isAdmin: true,
      isActive: true
    },
    {
      id: 5,
      username: "zaid_gamer",
      age: 17,
      email: "zaid@example.com",
      isAdmin: false,
      isActive: false
    }
];

// Given an array of users, return an array of usernames: Ex: [{ username: "ALi"}, { username: "Nora" }]

const arrayOfUserNames = users.map((user) => {
    return user.username;
})

// console.log(arrayOfUserNames)


// Filter out users under the age of 18 from an array of user objects.

const usersUnder18 = users.filter((user) => {
    if (user.age < 18) {
        return user;
    }
})

// console.log(usersUnder18)



// Given an array of tasks, return a new array of just completed tasks.

const tasks = [
    {
        task: "Do laundry",
        isComplete: false
    },
    {
        task: "Fold clothes",
        isComplete: false
    },
    {
        task: "Grab Groceries",
        isComplete: true
    },
    {
        task: "Get Gas",
        isComplete: true
    }
]

const completedTasks = tasks.filter((item) => {
    if (item.isComplete === true) {
        return item.task;
    }
})

console.log(completedTasks);