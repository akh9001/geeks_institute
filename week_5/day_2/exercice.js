// 🌟 Exercise 1 : Giphy API
fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', {
  method: 'GET',
}).then(response => {
  if (!response.ok) {
	throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
}).then(data => {
  const gifs = data.data;
  console.log(gifs);
  const container = document.getElementById('gifs-container');
  
  gifs.forEach(gif => {
	const img = document.createElement('img');
	// img.src = gif.images.original.url;
	  img.src = gif.images.fixed_height.url;
	img.alt = gif.title;
	container.appendChild(img);
  });
}).catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});

// 🌟 Exercise 1 : Giphy API

const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const query = 'sun';
const limit = 10;
const offset = 1; // start from the 2nd result

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}`)
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json();
	})
	.then(data => {
		console.log(data); // Logs the entire response object
	})
	.catch(error => {
		console.error("Fetch error:", error);
	});

	// 🌟 Exercise 3 : Async functions
	async function fetchStarWarsData() {
	try {
		const response = await fetch("https://www.swapi.tech/api/starships/9/");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		const starship = data.result.properties;
		const starshipInfo = document.getElementById('star-war');
		starshipInfo.innerHTML = `
			<p>Name: ${starship.name}</p>
			<p>Model: ${starship.model}</p>
			<p>Manufacturer: ${starship.manufacturer}</p>
			<p>Cost in Credits: ${starship.cost_in_credits}</p>
			<p>Length: ${starship.length}</p>
			<p>Crew: ${starship.crew}</p>
			<p>Passengers: ${starship.passengers}</p>
			<p>Cargo Capacity: ${starship.cargo_capacity}</p>
			<p>Max Atmosphering Speed: ${starship.max_atmosphering_speed}</p>
			<p>Hyperdrive Rating: ${starship.hyperdrive_rating}</p>
			<p>MGLT: ${starship.MGLT}</p>
			<p>Starship Class: ${starship.starship_class}</p>
		`;
		console.log(data.result);
	} catch (error) {
		console.error("Fetch error:", error);
	}
}
fetchStarWarsData();

// 🌟 Exercise 4: Analyze
function resolveAfter2Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}

async function asyncCall() {
	console.log('calling');
	let result = await resolveAfter2Seconds();
	console.log(result);
}

asyncCall();

// the output will be:
// calling
// (after 2 seconds)
// resolved
