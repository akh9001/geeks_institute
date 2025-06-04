let makeAllCaps = (words) => {
	let uppercaseWords = []
	for ( world of words )
	{
		if (typeof world !== 'string')
			return Promise.reject("All worlds must be strings");
		else
			uppercaseWords.push(world.toUpperCase());
	};
	return Promise.resolve(uppercaseWords);
}

makeAllCaps(["hello", "world", "javascript"])
	.then(result => console.log(result))
	.catch(error => console.log(error));

makeAllCaps([1, "world", "javascript"])
	.then(result => console.log(result))
	.catch(error => console.log(error));
// 	console.log(result);

function sortWords(arr){
	if (!Array.isArray(arr)) {
		return Promise.reject("Input must be an array");
	}
	if (arr.length >= 4)
		return Promise.resolve(arr.sort());
	else
		return Promise.reject("Array must contain more than 4 elements");
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
	.then((arr) => sortWords(arr))
	.then((result) => console.log(result))
	.catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
	.then((arr) => sortWords(arr))
	.then((result) => console.log(result))
	.catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
	.then((arr) => sortWords(arr))
	.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
	.catch(error => console.log(error))

// 2nd daily challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs() {
	let morseObj = JSON.parse(morse);
	if (typeof morseObj !== 'object' || morseObj === null) {
		return Promise.reject("Invalid Morse code object");
	}
	return Promise.resolve(morseObj);
}

function toMorse(morseJS) {
	let phraseToMorse = document.getElementById("phraseToMorse").value.trim().toLowerCase();
	if (typeof morseJS !== 'object' || morseJS === null) {
		return Promise.reject("Invalid Morse code object");
	}
	let morseCode = [];
	for (let char of phraseToMorse) {
		console.log(`Processing character: ${char}`);
		console.log(`Morse code for character: ${morseJS[char]}`);
		console.log(`Current Morse code array: ${morseCode}`);
		if (morseJS[char] !== undefined) {
			morseCode.push(morseJS[char]);
		} else {
			return Promise.reject(`Character "${char}" not found in Morse code`);
		}
	}
	return Promise.resolve(morseCode);
}

let morseJS;
toJs()
	.then(result => {
		morseJS = result;
	})
	.catch(error => {
		console.error("Error parsing Morse code:", error);
	});

function joinWords(morseTranslation)
{
	console.log("Morse Code:", morseTranslation);
	let output = document.getElementById("morseCodeOutput");
	output.innerHTML = morseTranslation.join("<br>");
	output.style.cssText = "font-size: 20px; color: blue; font-weight: bold; margin-top: 20px;";
}

function displayMorseCode() {
	toMorse(morseJS)
		.then(joinWords)
		.catch(error => {
			console.error("Error:", error);
			let output = document.getElementById("morseCodeOutput");
			output.innerHTML = `<span style="color: red;">Error: ${error}</span>`;
			output.style.cssText = "font-size: 20px; color: red; font-weight: bold; margin-top: 20px;";
		});
}

document.getElementById("convertButton").addEventListener("click", () => {
	displayMorseCode();
});

