// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Cookie";
let name2 = name;
console.log(name, name2);
name = "Cookie K";
console.log(name, name2);

// Let's say we have an array
const players = ["Cook", "Mike", "Martin", "Brian"];

// and we want to make a copy of it.
const team = players;
console.log(players, team);
// team[3] = 'Joey';

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const team2 = players.slice();
team2[3] = "Joey";
console.log(team2, players);

const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Gerard Kelly",
  age: 80,
};

// and think we make a copy:

const captain = person;
captain.number = 99;
// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99})
console.log(cap2);


// We will hopefully soon see the object ...spread
// const cap3 = {...person} should be available soon

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const gerard = {
    name: 'Gerard',
    age: 68,
    social: {
        twitter: '@gerryk',
        facebook: 'gerry.k'
    }
}

console.log(gerard);

const ger = Object.assign({}, gerard);
ger.name = 'Gerry';
console.log(ger);
console.log(gerard);
// only goes down one level, if social is changed it will change in gerard and ger





