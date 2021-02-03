function num(num1, num2) {
    return num1 + num2;
}
const result = num(15, 15);
console.log(result);


//But tumi jodi second parameter dite vule jao tahole error asbe se ketre ki korte hobe
function num(num1, num2) {
    if (num2 === undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
const result = num(15);
console.log(result);


//Second way
function num(num1, num2) {
    num2 = num2 || 0; //or num2 = num2 || 20/30/40/0
    return num1 + num2;
}
const result = num(15);
console.log(result);


//New way using es6
function num(num1, num2 = 20) {
    return num1 + num2;
}
const result = num(15);
console.log(result);