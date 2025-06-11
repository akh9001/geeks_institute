// exercice 1 : Find the numbers divisible by 23
let displayNumbersDivisible = (n = 23) => {
	let sum = 0;
	let devisableOfn = "";
	for (let i = 0; i <= 500; i++){
		if (i % n === 0) {
			devisableOfn += i + " ";
			sum += i;
		}
	}
	console.log("Outcome : " + devisableOfn);
	console.log("Sum : " + sum);
}

// displayNumbersDivisible();
// displayNumbersDivisible(3);
// displayNumbersDivisible(45);

// exercice 2 : Shopping List

const stock = {
	"banana": 6,
	"apple": 0,
	"pear": 12,
	"orange": 32,
	"blueberry": 1
}

const prices = {
	"banana": 4,
	"apple": 2,
	"pear": 1,
	"orange": 1.5,
	"blueberry": 10
}

let shoppingList = ["banana", "apple", "orange"];
function myBill() {
	let total = 0;
	for (item of shoppingList){
		if (item in stock){
			if (stock[item] > 0){
				total += prices[item];
				stock[item]--;
			}
			else {
				console.log(item + " is out of stock");
			}
		}
	}
	return total;
}
console.log("My Bill is : ", myBill());

// Exercise 3 : What’s in my wallet ?

let changeEnough = (itemPrice, amountOfChange) => {
	
}
