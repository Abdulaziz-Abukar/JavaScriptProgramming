const people = {
  Amina: { age: 27, occupation: "Engineer" },
  Bilal: { age: 34, occupation: "Teacher" },
  Zahra: { age: 22, occupation: "Designer" },
  Kareem: { age: 29, occupation: "Developer" },
  greet: function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};


// Given an object with names and ages, loop through the object and log "Name is Age years old" for each entry.
for (const person in people) {
    console.log(`${person} is ${people[person].age} years old`);
}


// Create a function that takes an object and returns a new object where all string values are uppercased.
function valuesToUppercase(obj) {
    const result = {};

    for (const key in obj) {
      const innerObj = obj[key];
      result[key] = {};
  
      for (const prop in innerObj) {
        if (typeof innerObj[prop] === "string") {
          result[key][prop] = innerObj[prop].toUpperCase();
        } else {
          result[key][prop] = innerObj[prop];
        }
      }
    }
  
    return result;
}

// console.log(valuesToUppercase(people));

// Create a function countWords(obj) that counts how many values in the object are strings.
function countWords(obj) {
  let count = 0;
  for (const key in obj) {
    const innerObj = obj[key];
    console.log("This is the innerObj: " + key)

    for (const prop in innerObj) {
      console.log("This is the inner Property:" + prop)
      if (typeof innerObj[prop] === "string") {
        count++;
      }
    }
  }

  return count;
}

// console.log(countWords(people));

// Add a method describe() to an object that logs a summary of its own properties.
