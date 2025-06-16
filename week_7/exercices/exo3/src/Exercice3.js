import React, { Component } from 'react';
import './Exercice.css'; // Assuming you have a CSS file for styles

class Exercise extends Component {
	render() {
		const headerStyle = {
			color: 'red',
			backgroundColor: 'lightblue',
			padding: '10px',
			borderRadius: '8px',
		};
		const style_header = {
			color: "white",
			backgroundColor: "DodgerBlue",
			padding: "10px",
			fontFamily: "Arial"
		  };

		return (
			<>
				<h1 style={style_header}>This is a Header</h1>
				<p className='para'>This is a paragraph.</p>
				<div>
					<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Visit React Official Website
					</a>
				</div>
				{/* 
				    target="_blank": Open the link in a new browser tab or window when the user clicks it.
					//? rel="noopener" – prevents the new page from having access to your window (security measure).

					//? rel="noreferrer" – prevents the referrer information (your URL) from being passed to the new page.
				 */}

				<form>
					<label htmlFor="name">Enter Your Name: </label>
					<br />
					<br />
					<input type="text" id="name" name="name" />
					<button type="submit">Submit</button>
				</form>
				<img
					src="./image.png"
					alt="Placeholder"
					style={{ marginTop: '10px' }}
				/>
				<div>
					<ul>This is an unordered list:
						<li>Coffee</li>
						<li>Tea</li>
						<li>Milk</li>
					</ul>
				</div>
			</>
		);
	}
}

export default Exercise;
