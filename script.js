// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10
function min(...numbers) {
    let result = Infinity;
    for (let number of numbers) {
        if (number < result) result = number;
    }
    return result;
}
console.log(min(3, 5)); // 3

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4
function calculateCircumference(radius) {
    let circumference = 2 * 3.14 * radius;
    return circumference
}
console.log(calculateCircumference(7)); // circumference => 43.96 

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
function searchString(letter,str) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++)
    {
        if (str.charAt(position) == letter)
        {
            letter_Count +=1;
        }
    }
    return letter_Count;
}
console.log(searchString("e","Tree")); // e occurs 2 times, outputted as 2.