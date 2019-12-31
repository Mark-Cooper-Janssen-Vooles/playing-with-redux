import React from 'react';
// import { createStore } from 'redux';
import './App.css';



//OBJECT DESTRUCTURING: 


// const person = {
//   name: "Mark",
//   age: 28,
//   location: {
//     city: 'Melbourne',
//     temp: 42
//   }
// }

// // console.log(`${person.name} is ${person.age}.`)

// // ES6 destructuring:
// const {name, age} = person;
// console.log(`${name} is ${age}.`)


// //can be time consuming: 
// if(person.location.city && person.location.temp) {
//   console.log(`Its ${person.location.temp} in ${person.location.city}.`)
// }

// //simplified with destructuring:
// // const {city, temp} = person.location;
// // if(city && temp) {
// //   console.log(`Its ${temp} in ${city}.`)
// // }

// //can rename: 
// const {city, temp: temperature } = person.location;
// if(city && temperature) {
//   console.log(`Its ${temperature} in ${city}.`)
// }


// //can setup defaults: 
// const { gender = "male" } = person;
// //if person.gender is undefined, it sets a default to "male"
// console.log(`${person.name} is this gender: ${gender}`)


// //can use both renaming and defaults at the same time 
// const { gender: theGender = "male" } = person;
// console.log(`${person.name} is this gender: ${theGender}`)

// //---------

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "penguin"
//   }
// }

// const {name: publisherName = "Self-published"} = book.publisher

// console.log(publisherName);
// console.log();


// const Destructuring = () => {
//   return (
//     <div>
//       Destruturing
//     </div>
//   );
// };



//ARRAY DESTRUCTURING: 

const address = ["123 fake street", "Melbourne", "VICTORIA", "3000"]

// console.log(`You are in ${address[1]} ${address[2]}`)


//an ordered list of variable names goes in here:
// const [street, city, state, postcode] = address
//it matches it up by position!


//can skip some items: (remove the name but leave the comma)
//setting defaults: (if there is no 3rd item, use the default)
const [ , city, state = "WA", ] = address;
console.log(`You are in ${city} ${state}`);

//challenge: 
const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [product, , mediumPrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}.`)

const Destructuring = () => {
  return (
    <div>
      Destruturing
    </div>
  );
};

export default Destructuring;