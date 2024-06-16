let character = 'Hello';
console.log(character);
character = "World";
console.log(character);
let secondCharacter;
secondCharacter = character;

let count = 8;
console.log(count + 1);

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
console.log(rows);

rows[2] = 10;
rows[rows.length - 1];

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);

const character = "#";
const count = 8;
const rows = [];

function padRow() {

}
const call = padRow();
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);