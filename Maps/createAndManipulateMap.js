/*
Create and Manipulate a Map

Create a Map named studentMap and add key-value pairs for name, age, and grade. Retrieve and log each value, then remove the grade key-value pair and log the updated map size.
*/


let map = new Map();

map.set('name', 'Abdulaziz');
map.set('age', 24);
map.set('grade', 100);

console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.get("grade"));
map.delete("grade");

