// Basic JavaScript

// -- Variable Declarations --
// Primative Types in Javascript - strings, integers, floats, arrays, objects

// String Variable
name = 'Bill';

console.log(name)

// Integer Variable 
some_number = 25;

console.log(some_number)

// Float Variable
some_float = 3.14;
console.log(some_float)

// Array Variable
some_array = [1, 2, 3, 4, 45, 5, 6, 7, 78, 92];
console.log(some_array)

some_object = { 'test': 'Play this please' }

console.log(some_object)

// String Concatination
statement = name + ', how are you?';

console.log(statement)

// Basic Math Operations
sum = 5 + 5;
console.log(sum)

product = 5 * 5;
console.log(product)

difference = 5 - 5
console.log(difference)

divide = 5 / 5
console.log(divide)

// More math operations

square = 5 ** 2;
console.log(square)

find_floor = Math.floor(25.2)
console.log(find_floor)

find_ceil = Math.ceil(25.5)
console.log(find_ceil)

// Mind Bender
more_crazy = some_float + '4'
console.log(more_crazy)

// Javascript Hoisting Example
console.log("Before declaration: ", basketball_player)
var basketball_player = "LeBron James"
console.log('After declaration ', basketball_player)

// Javascript let keyword ES6 JavaScript
// This will give you an error if you use let and call console.log(nba_goat) before
let nba_goat = 'Micheal Jordan'
console.log(nba_goat)
nba_goat = "Kobe"
console.log(nba_goat)

// JavaScript const keyword - ES6+ JavaScript
const first_name = "Jacqueline"
console.log(first_name)

// const first_name = "Robert" // No Redeclaration
console.log(first_name)

// first_name = "bob" // No updating
console.log(first_name)

/* Javascript Function Creations
There are multiple ways of making a function in JS */

// Regular Named Function
function addNums() {
    let num = 4;
    let num2 = 5
    return num + num2
}

console.log(addNums())

// ES6 Arrow Function
let addNums2 = () => {
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums2())

// Variable Name function
let addNums3 = function () {
    let num = 4;
    let num2 = 5;
    return num + num2
}

console.log(addNums3())

// Functions with parameters
function multiplynums(num, num2) {
    return num * num2
}

console.log(multiplynums(4, 8))

// Functions with parameters and arrow function
let multiplynums2 = (num, num2) => {
    return num * num2
}

console.log(multiplynums(4, 8))

// Variable Function with Parameter
let multiplynums3 = function (num, num2) {
    return num * num2
}
console.log(multiplynums3(4, 8))

// Self-invoking Function (equivalent to lambda function)
console.log((function () {
    let hello = "hello world";
    return hello
})()) // The () "calls upon itself so we dont need a return"

// JavaScript Control Flow
function determineage(age) {
    if (age < 18) {
        return 'Minor'
    } else if (age >= 18 && age <= 65) {
        return "Adult Not Retired"
    } else {
        return "Elderly person retired"
    }
}
console.log(determineage(30))


//Ternary Operator - JS 
function determineAge2(age) {
    return (age < 18) ? "minor" : (age >= 18 && age <= 65) ?
        "Adult not yet retired" : "Elderly Person Retired"
}

console.log(determineAge2(33))

// "For loop"/ Loops in JS
//for keyword (counter; expression; incrementation/decremintation)
function countByOne() {
    for (let i = 0; i < 20; i++) {
        console.log(i)
    }
    return "Counting Stopped"
}
console.log(countByOne(20))

function decreaseByOne() {
    for (let i = 20; i > 0; i--) {
        console.log(i)
    }
    return "Decreasing Stopped"
}

console.log(decreaseByOne())

// While Loop 
function countWithWhile() {
    let i = 0;
    let text = "";

    while (i < 10) {
        text += "This number is..." + i + "\n"
        i++
    }
    return text
}

console.log(countWithWhile(10))

// Do While Loop
function countWithDoWhile() {
    let i = 0;
    let text = "";
    do {
        text += "This number is now..." + i + "\n"
        i++
    }
    while (i < 10)
    return text
}

console.log(countWithDoWhile())

// JavaScript Array
let groupOfNames = ["Terry", "ben", "Ash", "Brock", "Misty"]
console.log(groupOfNames[1])
console.log(groupOfNames)

// JavaScript Array Methods

// toString()
console.log(groupOfNames.toString())

//join()
console.log(groupOfNames.join(" - "))

// forEach()
console.log(groupOfNames
    .forEach(element => { console.log(element) }))

// Using an array value -- Search Method (for a String)
console.log(groupOfNames[0].search('T'))

// Array Method - Slice()
console.log(groupOfNames.slice(0, 3))

// Array Method - Splice()
console.log(groupOfNames.splice(3, 0, "Freddie", "bob"))
console.log(groupOfNames)

for (let i = 0; i < groupOfNames.length; i++) {
    if (i % 2 == 0) {
        groupOfNames.splice(i, 2, "even index")
    }

    console.log(groupOfNames)
}

function determineage(age) {
    if (age < 18) {
        return 'Minor'
    } else if (age >= 18 && age <= 65) {
        return "Adult Not Retired"
    } else {
        return "Elderly person retired"
    }
}

// Exercise 1
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_name = ["Max", "HAS", "PuRple", "dog"]
dog_string.split(" ")
function findWords() {
  dog_name.forEach(function (item, index) {
  if (dog_string.includes(item)){
    return "Matched " + item
  } else {
    return "No Matches"
}
})
}
console.log(findWords())















// Exercise 2
groupname = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
for (let i = 0; i < groupname.length; i++) {
    if (i % 2 == 0) {
        groupname.splice(i, 1, "even index")
    }
}
console.log(groupname)


