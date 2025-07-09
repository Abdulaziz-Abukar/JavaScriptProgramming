/*
You're given an array of user objects, each with a name and a role (like "admin", "editor", "viewer"). Write a function groupUsersByRole(users) that returns an object grouping all users by their role.

Each role should be a key, and its value should be an array of user names who have that role. 
*/

const users = [
  { name: "Ali", role: "admin" },
  { name: "Sara", role: "editor" },
  { name: "Zahra", role: "viewer" },
  { name: "Tariq", role: "admin" },
  { name: "Fatima", role: "viewer" },
];

function groupUsersByRole(users) {
  const grouped = {};

  for (const user of users) {
    const role = user.role;

    if (!grouped[role]) {
      grouped[role] = [];
    }

    grouped[role].push(user.name);
  }

  return grouped;
}

console.log(groupUsersByRole(users));
