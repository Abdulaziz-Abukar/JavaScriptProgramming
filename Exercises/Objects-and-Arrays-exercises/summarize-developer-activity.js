/*
{
  name: "Developer Name",
  totalProjects: 3,
  activeProjects: 2,
  totalLinesOfCode: 4560
}

summarizeActivity(devs)
 ➞ [
  {
    name: "Amina",
    totalProjects: 2,
    activeProjects: 1,
    totalLinesOfCode: 1800
  },
  {
    name: "Bilal",
    totalProjects: 2,
    activeProjects: 2,
    totalLinesOfCode: 2760
  }
] */
const devs = [
  {
    name: "Amina",
    projects: [
      { title: "App One", isActive: true, linesOfCode: 1200 },
      { title: "App Two", isActive: false, linesOfCode: 600 },
    ],
  },
  {
    name: "Bilal",
    projects: [
      { title: "ToolX", isActive: true, linesOfCode: 2000 },
      { title: "ToolY", isActive: true, linesOfCode: 760 },
    ],
  },
];

function summarizeActivity(arr) {
  return arr.map((person) => {
    const totalProjects = person.projects.length;

    const activeProjects = person.projects.filter(
      (project) => project.isActive
    ).length;

    const totalLinesOfCode = person.projects.reduce(
      (sum, project) => sum + project.linesOfCode,
      0
    );

    return {
      name: person.name,
      totalProjects,
      activeProjects,
      totalLinesOfCode,
    };
  });
}

console.log(summarizeActivity(devs));
