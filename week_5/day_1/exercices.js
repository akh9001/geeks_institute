//exercice 1 : 

let compareToTen = ( num ) => {

	return new Promise((resolve, reject) => {
		if (num <= 10)
			resolve("Le nombre est inférieur ou égal à 10");
		else
			reject("Le nombre est supérieur à 10");
	})
};

//In the example, the promise should reject
compareToTen(15)
	.then(result => console.log(result))
	.catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
	.then(result => console.log(result))
	.catch(error => console.log(error))

//exercice 2 : Promise

let promise = new Promise((resolve) => {
	setTimeout(() => {
		resolve("success");
	}, 4000)
}
);

promise
	.then(result => console.log(result))
	.catch(error => console.log(error));

// Exercise 3 : Resolve & Reject
	// let promise2 = new Promise((resolve, reject) => {
	// 	resolve(3);
	// })
	// .then(result => {
	// 	console.log(result);
	// 	return result;
	// }
	// )
	// let promise3 = new Promise((resolve, reject) => {
	// 	reject("Boo!");
	// }
	// )
	// .catch(result => {
	// 	console.log(result);
	// 	return result;
	// })
let resolvedPromise = Promise.resolve(3);
let rejectedPromise = Promise.reject("Boo!");
resolvedPromise
	.then(result => {
		console.log(result);
	});
rejectedPromise
	.catch(result => {
		console.log(result);
	});