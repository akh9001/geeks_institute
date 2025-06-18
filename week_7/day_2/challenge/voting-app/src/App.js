import './App.css';
import { useState } from 'react';

function App() {
	const [languages, setLanguages] = useState([
		{ name: "Php", votes: 0 },
		{ name: "Python", votes: 0 },
		{ name: "JavaSript", votes: 0 },
		{ name: "Java", votes: 0 }
	])
	const hadleVote = (index) => {
		const newLanguages = [...languages];
		newLanguages[index].votes += 1;
		setLanguages(newLanguages);
	}
	return (
		<div className="container">
			   <h1>Vote for your favorite language</h1>
		<div className="languages">
			{languages.map((language, index) => (
				<div key={index} className="language">
					<p>{language.votes}</p>
					<h2>{language.name}</h2>
					<button onClick={() => hadleVote(index)}>
						Vote
					</button>
				</div>
			))}
		</div>
		</div>
	);
}

export default App;
