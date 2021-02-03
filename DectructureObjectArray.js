// How to find an element in array with destructor method.
const gentleMan = {
    Name: 'Smart',
    Age: 30,
    Salary: 90000,
    Phone: 3738574,
    Address: 'Dhaka'
}
const {
    Name,
    Age,
    Phone
} = gentleMan; //for this function you must declare the variable in last with equal sign
console.log(Name, Age, Phone);

//About destructive array
const friendName = ['Rimon', 'Sumon', 'Sujon', 'Shahin', 'Symon', 'Sweet'];
const [beauty, ...other] = friendName;  //1ta namer pore bakigula other-e jabe
const [beauty, cute, ...other] = friendName;    //2ta namer pore bakigula other-e jabe
const [beauty, cute, misty, ...other] = friendName; //3ta namer pore bakigula other-e jabe
console.log(others);