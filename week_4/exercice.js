// #1
function funcOne() {
	let a = 5;
	if (a > 1) {
		a = 3;
	}
	console.log(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne(); // alert: "inside the funcOne function 3"

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// ❌ Error: Assignment to constant variable.


//#2
let a = 0;
function funcTwo() {
	a = 5;
}

function funcThree() {
	console.log(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // alert: "inside the funcThree function 0"
funcTwo()
funcThree() // alert: "inside the funcThree function 5"
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// ❌ Error: Assignment to constant variable.


//#3
function funcFour() {
	window.a = "hello";
}


function funcFive() {
	console.log(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() // creates global variable a on window: window.a = "hello"
funcFive() // shows: "inside the funcFive function hello"
// This works because window.a is a global variable in the browser environment.

//#4
// let
 a = 1;
function funcSix() {
	let a = "test";
	console.log(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() // shows: "inside the funcSix function test"
funcFive() // shows: "inside the funcFive function hello"	
// #4.2 - run the code in the console - The inner let a = "test" shadows the outer a = 1.

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// It fine, No reassignment is being done inside funcSix.
//#5
// let 
a = 2;
if (true) {
	let a = 5;
	console.log(`in the if block ${a}`); // "in the if block 5"
}
console.log(`outside of the if block ${a}`); // "outside of the if block 2"


// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// Still works fine, as long as there is no reassignment.

// Both let and const are block scoped, so behavior remains the same.

// Exercise 2 : Ternary operator

let winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); // 10

// 🌟 Exercise 3 : Is it a string ?
let is_string = (value) => {
	return typeof value === 'string';
}
console.log(is_string("hello")); // true
console.log(is_string(123)); // false

// 🌟 Exercise 4 : Find the sum
let sum = (a, b) => { return a + b; };

// 🌟 Exercise 5 : Kg and grams
function convertKgToGrams(kg) {
	return kg * 1000;
}
console.log(convertKgToGrams(5)); // 5000

let KgToGrams = (kg) => kg * 1000;
console.log(KgToGrams(5)); // 5000

// 🌟 Exercise 6 : Fortune teller

let fortuneTeller = (numChildren, partnerName, geoLocation, jobTitle) => {
	const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
	document.body.innerHTML += `<p>${message}</p>`;
}
fortuneTeller(3, "Alice", "Paris", "Engineer");

// 🌟 Exercise 7 : Welcome

// script.js

(function (name) {
	const userContainer = document.getElementById("user-container");

	const userDiv = document.createElement("div");
	userDiv.className = "user-info";

	// Dummy profile picture URL (can be replaced with real one)
	const profilePic = document.createElement("img");
	img.src = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

	const userName = document.createElement("span");
	userName.textContent = name;

	userDiv.appendChild(profilePic);
	userDiv.appendChild(userName);

	userContainer.appendChild(userDiv);
})("John"); // Self-invoking with argument

// 🌟 Exercise 8 : Juice Bar
// part 1
let makeJuice = (size) => {
	const addIngredients = (first_ingredient, second_ingredient, third_ingredient) => {
		return `The client wants a ${size} juice, containing ${first_ingredient}, ${second_ingredient}, ${third_ingredient}`;
	};
	addIngredients("apple", "banana", "orange");
};
makeJuice("large"); // "The client wants a large juice, containing apple, banana, orange"
// part 2

let makeJuice_ = (size) => {
	const ingredients = [];

	const addIngredients = (ingredient_1, ingredient_2, ingredient_3) => {
		ingredients.push(ingredient_1, ingredient_2, ingredient_3);
	};

	const displayJuice = () => {
		return `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
	};
	
	addIngredients ("apple", "banana", "orange");
	addIngredients("kiwi", "pineapple", "strawberry");

	// Display final juice
	displayJuice();
}
makeJuice_("large"); // "The client wants a large juice, containing apple, banana, orange, kiwi, pineapple, strawberry"