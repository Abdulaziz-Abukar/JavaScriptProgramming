// Create a Map named employeeData with keys name, position, and salary
const employeeData = new Map([
    ['name', 'Abdulaziz'],
    ['position', 'Developer'],
    ['salary', 80000]
  ]);
  
  // Function to update the salary
  function updateSalary(map, newSalary) {
    if (newSalary <= 0) {
      throw new RangeError("Salary must be a positive number");
    }
    map.set('salary', newSalary);
  }
  
  try {
    // Attempt to update the salary
    updateSalary(employeeData, 100000);
    console.log('Updated employee data:', employeeData);
  } catch (error) {
    console.log(`Error Name: ${error.name}\nError Message: ${error.message}`);
  } finally {
    console.log("Salary update process completed");
  }
  