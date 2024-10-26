// Problem-1:Write a function that loops through an array of numbers and returns the sum of the numbers.

let array = [10,14,12,10];
let sum = 0;

function totalNumber(array){
    for(let singelItems of array){
        sum+=singelItems;
    }
    return sum;
}
console.log(totalNumber(array));



// Problem-2:Create an object with properties name and age. Write a function to add a new property city to the object.

let person ={
    name: "Mohammad",
    age: 25,
}

function addcity(person){
    person.city = "Cumilla";
    return person;
}

console.log(addcity(person));



// Problem-3:Write a function that takes a number and returns whether it is even or odd.
function evenOrOdd(n){
    if(n % 2 === 0){
       return ("even numver" + " " + n);
    }
    else{
        if(n % 2 !== 0){
            return ("Odd number" + " " + n);
        }
    }
}

console.log(evenOrOdd(5));


// Problem-4;
// let RepresentsCar ={
//     brand:"BMW",
//     model:"fmfs69",
// }

// function updats(model){
//     RepresentsCar.model = "nothing420";
//     return RepresentsCar;
// }
// console.log(updats(RepresentsCar));



// Problem-4:Create an object that represents a car with properties brand and model. Write a function to update the model of the car.
let RepresentsCar ={
    brand:"BMW",
    model:"fmfs69",
}

function updats(){
    RepresentsCar.model = "Nothing420";
    console.log(RepresentsCar);
}
updats();



// Problem-5:Write a function that loops through an object and prints each property and its value.

let nature ={
    tree:"Coconut tree",
    soil: "Red soil",
    sea: "C0x's bazar sea",
    sky: "Blue",
    animal:"Tiger",
    water: "Drinking water",
}

function allNature(viewNature){
    for(let saveNature in viewNature){
    console.log(saveNature + ":" + " " + viewNature[saveNature]);
        
    }
}
allNature(nature);