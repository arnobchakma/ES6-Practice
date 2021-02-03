const firstName = 'Beauty';
const lastName = 'Awesome';
const fullName = firstName + " " + lastName; //Eivabe line er moddhe space deyar jonne empty string use korte hoi;
console.log(fullName);


//But ES6 e jevabe use korle empty string use korte hoina// 
const firstName = 'Beauty';
const lastName = 'Awesome';
const fullName = `${firstName} ${lastName} ${22 + 18 + 10} is a good guys`
console.log(fullName); //Ans:Beauty Awesome 50 is a good guys


//ES6 er maddhome kivabe multiple line lika jai easily//       [``]
const multiline = `I will kill you
    I will marry you
    I will busy with yesterday
    I will eat with you`
console.log(multiline)