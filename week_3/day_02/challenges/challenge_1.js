let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot < wordBad && wordNot !== -1 && wordBad !== -1)
	console.log(sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3));
else
	console.log(sentence);
// Output: The movie is good, I like it

// let removeNegative = (str) => {
// 	let wordNot = str.indexOf("not");
// 	let wordBad = str.indexOf("bad");

// 	if (wordNot < wordBad && wordNot !== -1 && wordBad !== -1)
// 		return str.slice(0, wordNot) + "good" + str.slice(wordBad + 3);
// 	else
// 		return str;
// }

// console.log(removeNegative("The movie is not that bad, I like it"));
// console.log(removeNegative("This movie is not so bad !"));
// console.log(removeNegative("This dinner is bad !"));
// console.log(removeNegative("This session is not good !"));
