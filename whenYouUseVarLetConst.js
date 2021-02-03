var friends = ['Rimon', 'Sumon', 'Nikil'];
friends[2] = 'Arnob'
console.log(friends);


//You can't change variable using const//
const herName = 'Shah';
// // herName = 'Shiv';    [can't change element]
console.log(herName);


//But you can change element in array with const//
const herName = ['Rimon', 'Sumon', 'Jiten', 'Simun'];
herName[2] = 'Sujita';
console.log(herName);


//console.log(sum)      let use kore kaj korle console.log baire kaj korbena. but var diye korle baire tekhe call kora jabe.
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    console.log(sum)
}


//you can call outside console.log using var //
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum)