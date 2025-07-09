const data = {
  id: 7,
  name: "Zahra",
  skills: ["HTML", "CSS", "JavaScript"],
  projects: [
    { title: "Portfolio", year: 2023 },
    { title: "Blog", year: 2024 },
  ],
  contact: {
    email: "zahra@example.com",
    social: {
      twitter: "@zahraCodes",
      github: "zahraGH",
    },
  },
};

// get Zahra's second skill
console.log(data.skills[1]);

// Get the title of her first project
console.log(data.projects[0].title);

// Get the GitHub username from the contact info
console.log(data.contact.social.github);

// Loop through the projects array and print each project title
for (let i = 0; i < data.projects.length; i++) {
  console.log(data.projects[i].title);
}

// Add a new skill to the skills array: "React"
data.skills.push("React");
console.log(data.skills);

// Add a new project { title: "Shop App", year: 2025 } to the projects array.
data.projects.push({ title: "Shop App", year: 2025 });
console.log(data.projects);
