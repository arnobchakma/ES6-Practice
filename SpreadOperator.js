const age = [12, 13, 15, 16];
const ages2 = [17, 18, 19, 20, 21];
const ages3 = [17, 18, 19, 20, 21];
//const totalAge = [age.concat(ages2).concat(ages3)]    //first way //
//const totalAge = [age, ages2, ages3]; //If using this style the array will show horizontally
const totalAge = [...age, 5, ...ages2, ...ages3]; //If using this style the array will show vertically  
console.log(totalAge)


//How to find max number tricky         (First Way)
const Minister = 600;
const PrimeMinister = 500;
const Chairmen = 400;
const maximum = Math.max(Minister, PrimeMinister, Chairmen );
console.log(maximum)


//But jodi element gulo array akare takhe tokon NaN dekave. tar jonne three dots (...) use korte hoi. Then ok.                        (Second Way)
const Minister = 600;
const PrimeMinister = 500;
const Chairmen = 400;
const likeArray = [600,500, 400];
const maximum = Math.max(...likeArray)
console.log(maximum)