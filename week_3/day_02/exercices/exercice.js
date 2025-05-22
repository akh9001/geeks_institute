// Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];
// 1.1
people.shift();
console.log(people);
people[people.length - 1] = "Jason";
console.log(people);
people.push("Asmaa");
console.log("Mary’s index : ", people.indexOf("Mary"));

custom_people = people.filter((person) => person !== "Mary" && person !== "Asmaa");
console.log(custom_people);
indexOfFoo = people.indexOf("Foo");
// output: -1, because "Foo" is not in the array
console.log(indexOfFoo);
last = people[people.length - 1];
console.log(last);
// 1.2

people.forEach(element => {
	console.log(element);
});
console.log("-----------------------");
let i = 0;
while (people.length > i)
{
	if (people[i] === "Devon")
		break;
	console.log(people[i]);
	i++;
}

// exercise 2 : Your favorite colors
const colors = ["purple", "blue", "green", "yellow", "gray"];
for (let i = 1; i <= colors.length; i++)
	console.log(`My #${i} choice is ${colors[i - 1]}`);

let suffix = ["st", "nd", "rd", "th"];
for (let i = 0; i < colors.length; i++)
{
	if (i > 2)
		suffix[i] = "th";
	console.log(`My ${i + 1}${suffix[i]} choice is ${colors[i]}`);
}

// exercise 3 : Repeat the question
// const prompt = require('prompt-sync')();
// let userInput = prompt("Enter a number : ");
// console.log(typeof userInput);
// userInput = parseInt(userInput);
// while (userInput < 10)
// {
// 	userInput = prompt("Enter a number : ");
// 	userInput = parseInt(userInput);
// }
// console.log("The number is : ", userInput);
// exercise 4 : Building Management
const building = {
	numberOfFloors: 4,
	numberOfAptByFloor: {
		firstFloor: 3,
		secondFloor: 4,
		thirdFloor: 9,
		fourthFloor: 2,
	},
	nameOfTenants: ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent: {
		sarah: [3, 990],
		dan: [4, 1000],
		david: [1, 500],
	},
};

for (const floor of Object.keys(building.numberOfAptByFloor)) {
	console.log(`Number of apartments in ${floor}: ${building.numberOfAptByFloor[floor]}`);
}

console.log(`Number of apartments in floor 1: ${building.numberOfAptByFloor.firstFloor}`);
console.log(`Number of apartments in floor 3: ${building.numberOfAptByFloor.thirdFloor}`);

console.log(`The name of the second tenant is : ${building.nameOfTenants[1]}`);
console.log(`The nymber of rooms of the second tenant is : ${building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]}`);

let sarah_rent = building.numberOfRoomsAndRent.sarah[1];
let dan_rent = building.numberOfRoomsAndRent.dan[1];
let david_rent = building.numberOfRoomsAndRent.david[1];
let sarah_david_rent = sarah_rent + david_rent;
if (sarah_david_rent > dan_rent)
	building.numberOfRoomsAndRent.dan[1] = 1200;
console.log(`The new rent of Dan is : ${building.numberOfRoomsAndRent.dan[1]}`);
// exercise 5 : Family
const family = {
	father: "Baba",
	mother: "Mama",
	sister: "Nouna",
	brother: "Nano",
};

for (const member in family) {
	console.log(`The ${member} is : ${family[member]}`);
}
// exercise 6 : Rudolf
const details = {
	my: 'name',
	is: 'Rudolf',
	the: 'reindeer'
}

let str = "";
for (const [key, val] of Object.entries(details)) {
	str += `${key} ${val} `;
}
console.log(str)
// redo it usung for in
str = "";
for (const key in details) {
	str += `${key} ${details[key]} `;
}

// exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let societyName = "";
for (let i = 0; i < names.length; i++)
{
	societyName += names[i][0];
}
societyName = societyName.split("").sort().join("");
console.log(societyName);







// {
// 	let total = 0;
// 	const karima = {
// 		name: "Karima",
// 		numberOfRooms: 3,
// 		rent: 900,
// 	};
// 	var halima = "Halima";
// }

// function greet() {
// 	var message = "Hello!";
// 	console.log(message); // ✅ Works inside the function
// }

// greet();

// console.log(message); // ❌ Error: message is not defined
// console.log(karima); // ❌ Error: karima is not defined
// console.log(halima); // ✅ Works outside the block
// console.log(total); // ❌ Error: total is not defined

