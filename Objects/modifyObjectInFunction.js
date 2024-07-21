/*
Modify Object in Function

Create an object named car with properties make and model. 
Write a function named updateCar that takes a car object and a newModel string as parameters, and updates the model property of the car object. 
Call the function and log the updated object to the console.
*/

let car = {
    make: "Toyota",
    model: "Camry"
}

function updateCar(car, newModel) {
    return car.model = newModel;
}


console.log(updateCar(car, "Bird"));

console.log(car);
