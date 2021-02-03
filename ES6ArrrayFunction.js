//Usually how you can use the function//
function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(20);
console.log(result)


//ANother way to use function//
const doubleIt = function(num){
    return num * 2;
}
const result = doubleIt(50);
console.log(result)


//ES6 way to using function//
const doubleIt = num => num * 2;
const result = doubleIt(22);
console.log(result)


//ES6 When you use two parameter you must need to use bracket in parameter//
const doubleIt = (num1, num2) => num1 + num2;
const result = doubleIt(50, 20);
console.log(result)


//ES6 When parameter is empty in function you can use this way//
const doubleIt = () => 10;
const result = doubleIt();
console.log(result)


// ES6 When you can use multiple parameter in function you can follow this way//
const doubleIt = (num1, num2) => {
    const sum = num1 + num2;
    const minus = num1 - num2;
    const total = sum * minus;
    return total;
}
const result = doubleIt(10, 5);
console.log(result)