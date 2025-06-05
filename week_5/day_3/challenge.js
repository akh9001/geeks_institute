const button = document.getElementById('getCharacterBtn');
const loading = document.getElementById('loading');
const characterDiv = document.getElementById('character');

button.addEventListener('click', () => {
	getRandomCharacter();
});

function showLoading() {
	loading.style.display = 'block';
	characterDiv.innerHTML = '';
}

function hideLoading() {
	loading.style.display = 'none';
}

function getRandomCharacter() {
	const randomId = Math.floor(Math.random() * 83) + 1; // IDs from 1 to 83
	showLoading();

	fetch(`https://www.swapi.tech/api/people/${randomId}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then(async data => {
			const person = data.result.properties;

			// Fetch homeworld info
			const homeworldResponse = await fetch(person.homeworld);
			const homeworldData = await homeworldResponse.json();
			const homeworld = homeworldData.result.properties.name;

			displayCharacter({
				name: person.name,
				height: person.height,
				gender: person.gender,
				birth_year: person.birth_year,
				homeworld
			});
		})
		.catch(error => {
			characterDiv.innerHTML = `<p>Error: ${error.message}</p>`;
		})
		.finally(() => {
			hideLoading();
		});
}

function displayCharacter(character) {
	characterDiv.innerHTML = `
    <h2>${character.name}</h2>
    <p><strong>Height:</strong> ${character.height}</p>
    <p><strong>Gender:</strong> ${character.gender}</p>
    <p><strong>Birth Year:</strong> ${character.birth_year}</p>
    <p><strong>Home World:</strong> ${character.homeworld}</p>
  `;
}
