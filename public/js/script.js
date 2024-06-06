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
  