/*
Switch Statement with Multiple Cases

Create a variable grade and assign it a letter grade ("A", "B", "C", "D", "F"). Use a switch statement to log a message based on the grade:
"Excellent" for "A",
"Good" for "B",
"Average" for "C",
"Poor" for "D",
"Fail" for "F".
*/

grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid input.")

}