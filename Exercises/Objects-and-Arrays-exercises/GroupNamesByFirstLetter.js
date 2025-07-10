/*
You’re given an array of user names. Write a function groupNamesByInitial(names) that returns an object where:

Each key is the first letter of the name (in lowercase)

The value is an array of names that start with that letter


🧪 Expected Output:

groupNamesByInitial(names)
➞ {
    a: ["Alice", "Ali"],
    z: ["Zahra", "Zaid"],
    t: ["Tariq"],
    f: ["Fatima", "Faisal"]
}
*/

const names = ["Alice", "Ali", "Zahra", "Zaid", "Tariq", "Fatima", "Faisal"];

function groupNamesByInitial(names) {
  const groupedNames = {};

  for (const name of names) {
    const firstLetter = name[0].toLowerCase();

    if (!groupedNames[firstLetter]) {
      groupedNames[firstLetter] = [];
    }

    groupedNames[firstLetter].push(name);
  }

  return groupedNames;
}

console.log(groupNamesByInitial(names));
