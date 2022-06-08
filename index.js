// Add answers here 
// # Test - Programming Basics 

// ## Test Instructions 
// * Work from the `index.js` file provided in this repository.
// * Work in the `master` branch. Commit your changes to the `index.js` file and push them to your repository. Your answers will be automatically graded when you push to your repository. If you do not push an updated `index.js` file to the `master` branch, the automatic grading will fail.
// * Follow the instructions below to complete the test. **Important**: Make sure that the *names* of your variables/functions match the names in the instructions below.
// * All your functions should return a value.
// * Good luck!

// ### Conditional Algorithms 

// #### 1. Los or New?
// Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.

function nameOfCity (string){
    if(string.toLowerCase().startsWith("los")===true || string.toLowerCase().startsWith("new")===true){
        return string;
    }else{
        return "The city name does not begin with Los or New"
    }
}

console.log(nameOfCity("New York"));
console.log(nameOfCity("newark"));
console.log(nameOfCity("London"));


// ##### Examples
// ````javascript
// nameOfCity('New York') ➞ 'New York'
// nameOfCity('newark') ➞ 'newark'
// nameOfCity('London') ➞ 'The city name does not begin with Los or New'
// ````

// #### 2. isDivisible?
// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.
function isDivisible(int){
    if(int%100===0){
        return true;
    }else{
        return false;
    }
}

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

// ##### Examples
// ````javascript
// isDivisible(1) ➞ false
// isDivisible(1000) ➞ true
// isDivisible(100) ➞ true
// ````


// #### 4. What's the weather?
// Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".
function isRaining(boolean){
   return (boolean === true) ? "wet day - you need an umbrella!" : "dry day - leave your umbrella at home!";
}

console.log(isRaining(true));
console.log(isRaining(false));
// ##### Example
// ````javascript
// isRaining(true) ➞ 'wet day - you need an umbrella'
// ````

// ### Loops 

// #### 1. Sequence
// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.
function geometricalSequence(){
    let limit = 256;
    let result = [];
        for(i=1; i <= limit; i*=2){
            if(limit >= i){
                result.push(i)
            }   
        }
    return result.join(" ");
}

console.log(geometricalSequence());
// ##### Example
// ````javascript
// geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
// ````

// #### 2. Multiples
// Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.
function multiplesOfThree(){
    let result = [];
        for(i=1; i <= 5; i++){
            result.push(i*3);
        }
    return result.join(" ");
}

console.log(multiplesOfThree());
// ##### Example
// ````javascript
// multiplesOfThree() ➞ '3 6 9 12 15'
// ````

// ### Math 

// #### 1. You've got the power
// Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.
function powerOf(int){
    return Math.pow(int,int);
}
console.log(powerOf(3));
console.log(powerOf(4));
// ##### Examples
// ````javascript
// powerOf(3) ➞ 27
// powerOf(4) ➞ 256
// ````

// ### Problem Solving 

// #### 1. How many? 
// Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 
function vowelCount(string){
    let Counter = 0;
    for (let i =0; i <= string.length -1; i++){
        if(string.toLowerCase().charAt(i)==="a" || string.toLowerCase().charAt(i)=== "e" || string.toLowerCase().charAt(i) == "i" || string.toLowerCase().charAt(i) == "o" || string.toLowerCase().charAt(i) == "u"){
            Counter += 1;
        }
    }
    return Counter;
}

console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));
console.log(vowelCount("AEIOU"));
// ##### Examples
// ````javascript
// vowelCount("hello") ➞ 2
// vowelCount("test") ➞ 1
// vowelCount("fbw") ➞ 0
// ````





// DO NOT EDIT below this line - This will result in an automatic fail
module.exports = {nameOfCity, isDivisible, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

