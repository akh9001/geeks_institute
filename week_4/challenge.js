let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = ( fruits ) => {
	fruits.forEach(fruit => {
		console.log(fruit);
	});
}
displayGroceries(groceries.fruits);

let cloneGroceries = (groceries) => {
	let user = client;
	client = "Betty";
	// user will remain "John" because strings are primitive types and copied by value.
	let shopping = groceries;
	groceries.totalPrice = "35$";
	// ✅ This will reflect in `shopping` because it's a reference to the same object.
	groceries.other.paid = false;
	// ✅ Same here; `shopping.other` is referencing the same nested object.
	console.log("User: " + user);
	console.log("Client: " + client);
	console.log("Shopping total price: " + shopping.totalPrice);
	console.log("Shopping paid: " + shopping.other.paid);
}
cloneGroceries(groceries);
console.log(groceries);