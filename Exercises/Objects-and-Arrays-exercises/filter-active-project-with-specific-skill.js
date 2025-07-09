const devs = [
  {
    name: "Sara",
    skills: ["HTML", "CSS", "JavaScript"],
    projects: [
      { title: "Portfolio", year: 2023, isActive: true },
      { title: "Old Blog", year: 2021, isActive: false },
    ],
  },
  {
    name: "Tariq",
    skills: ["Python", "Django"],
    projects: [{ title: "Dashboard", year: 2022, isActive: true }],
  },
  {
    name: "Lina",
    skills: ["JavaScript", "React"],
    projects: [
      { title: "Shop App", year: 2025, isActive: true },
      { title: "Weather Widget", year: 2024, isActive: false },
    ],
  },
];

/*
Write a function getActiveProjectsWithSkill(data, skill) that returns an array of project titles that are both:

Active (isActive: true)

The developer has the specified skill (like "JavaScript") 
*/

function getActiveProjectsWithSkill(arr, skill) {
  const resultArray = [];

  for (const dev of arr) {
    if (dev.skills.includes(skill)) {
      for (const project of dev.projects) {
        if (project.isActive) {
          resultArray.push(project.title);
        }
      }
    }
  }

  return resultArray;
}
console.log(getActiveProjectsWithSkill(devs, "JavaScript"));
// ➞ ["Portfolio", "Shop App"]
