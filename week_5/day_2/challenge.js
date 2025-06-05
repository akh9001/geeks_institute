const form = document.getElementById('gifForm');
const input = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const searchTerm = input.value.trim();

	if (!searchTerm) return;

	try {
		const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		console.log(result); // Check the object structure

		const gifUrl = result.data.images.original.url;

		const gifWrapper = document.createElement('div');
		gifWrapper.style.marginBottom = "10px";

		const img = document.createElement('img');
		img.src = gifUrl;
		img.alt = searchTerm;
		img.style.maxWidth = "300px";

		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = "DELETE";
		deleteBtn.style.marginLeft = "10px";
		deleteBtn.addEventListener('click', () => {
			gifContainer.removeChild(gifWrapper);
		});

		gifWrapper.appendChild(img);
		gifWrapper.appendChild(deleteBtn);
		gifContainer.appendChild(gifWrapper);

	} catch (error) {
		console.error("Fetch error:", error);
	}

	input.value = "";
});

deleteAllBtn.addEventListener('click', () => {
	gifContainer.innerHTML = '';
});
