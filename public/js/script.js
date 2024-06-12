const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
}

// variables
const pi = 3.142;
let username = 'Belkins';
let age = 99;
let present = false; 

// object
const person = {
    username: 'Belkins',
    age: 99,
    present: false,
    child:{
        name:'Bel Babe',
        friend: {
            name: 'boss',
        }

    }
}
console.log(person.username);
person.age = 200;
console.log(person);
console.log(person.child.friend.name)

// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue'
  }
  
  
  const bottles = [bottle1, bottle2];
  bottles;
  bottles.push(bottle1)
  bottles.push(bottle2)
  bottles;
  bottles[1].size;
  
  const date = new Date();
  date.getDay();
  
  // If/Else
//   const age = 18;
  if (age >= 18) {
    'You are true'
  } else {
    'You are false'
  }
  
  // For loop
  for(let i = 0; i <= 5; i++ ) {
   console.log ('We did it!', i)
  }

  // Functions
// Defining a function
function login(username, password) {
  // Validatemusername and passwordath
  if (!username || !password){
    return 'Username or password not provided';
  }
  // Verify username and password
  if(username == 'Belkins' && password == '1234')  {
    return 'User is logged in';} 
  else {
    return 'Invalid username or password';
  }
} 
// Invoking a function
login('Belkins', );

// Basic Arithmetic Operations
11 + 12;
1 + 0.5;
43 - 12
45 / 7;
5 * 3;
14 & 3;

Math.floor(45 / 24);
45 %  24
Math.random() * 1000;
Math.max(34,32,37)
2*(3+4)-5/2

// the use of Num()
Number('2')+2

// Strings in JavaScript
// Concatenation
const firstname = 'Mabel'
const middlename = 'Aikins'
const lastname = 'Acquah'
firstname + ' ' + middlename + ' ' + lastname ;
// Template literal
`${firstname} ${middlename} ${lastname}`;

// string Method
let fullName = 'Mabel Aikins Acquah'
fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(8)
fullName.slice(7,19)
fullName.split('')
fullName.replace('Mabel','Quinlyn')
fullName.indexOf("Aik")

// string Conversion
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount = 18000
console.log(`GHS${amount}`)
amount.toString()

// write a function that will add a participant to our Google Classroom
const participants = [];
function addParticipant(email){
  // check if email was provided
  if ( !email)
      {  
      return 'No email provided';
      }
  // check if email is valid
  if (!email.includes('@')){
    return 'Inavalid email provided '
  }
  // Add email to participants
  participants.push(email);
  return'participant added';
 }

addParticipant('bello@gmail.com');
addParticipant('may@gmail.com');

participants;

// Arrays in Javascript
const users = [
  {
    username: 'Belkins',
    password: '6060',
    email: 'bello@gmail.com'
  },
  {
    username: 'Belkutte',
    password: '2030',
    email: 'bel@gmail.com'
  }
]; 
users; 

// write a function that will take a user with firstname, lastname and return fullname

function fullName(user)
{
 return {
   ...user,
   fullName: `${user.firstname} ${user.lastname}`
 }; 
}
const user = {
  firstname: 'Mabel',
  lastname: 'Acquah'
}

fullName (user);

// Array map
// const users = [
//   {firstname: 'Mabel', lastname: 'Acquah'},
//   {firstname: 'Bel', lastname: 'Koko'},
//   {firstname: 'kutee', lastname: 'kutte'},
//   {firstname: 'Read', lastname: 'Well'},
// ]
users.map(fullName);

// square of numbers
function square(number){
  return number * number;
}

square(7)
const numbers = [9, 8, 7, 6]
numbers.map(square)

// Array filter
function isEven(number){
  return number % 2 === 0;
}
isEven(7)
numbers.filter(isEven)

// write a function will allow a user to reset their password
// // const user = {
//   email: 'bel@gmail.com',
//   password: '1234'
// // }


function resetPassword(email, newPassword) {
// check if email and new password was provied
  if (!email || !newPassword){
    'email or password not provided';
  }
  
  // Update password with new one
  user.password = newPassword;
  return 'password reset successful';
}
  

user;
resetPassword('bel@gmail.com','9090');
user;
  
 








