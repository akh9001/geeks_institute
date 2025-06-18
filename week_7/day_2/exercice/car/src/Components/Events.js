import { useState } from "react";
const Events = () => {
	const [isToggleOn, setIsToggleOn] = useState(true);
	const clickMe = () => {
		alert("You clicked me!");
	};
	const handleKeyDown = (event) => {
		  if (event.key === 'Enter'){
			alert("You pressed the Enter key! You typed: " + event.target.value);
			event.target.value = ''; // Clear the input field after pressing Enter
		  }
	}

	return (
		<div  className="container">
			<h1>events7</h1>
			<button onClick={clickMe}>Click Me</button>
			<input type="text" onKeyDown={handleKeyDown}  placeholder="Press the Enter key!"/>
			<h2>Toggle Button</h2>
			<button onClick={() => setIsToggleOn(!isToggleOn)} 
				style={{ backgroundColor: isToggleOn ? "green" : "red", color: "white", fontWeight: "bold", fontSize: "20px", padding: "10px 20px", borderRadius: "5px" }}
			>
				{isToggleOn ? "ON" : "OFF"}
			</button>
			<p>The button is currently {isToggleOn ? "ON" : "OFF"}</p>
		</div>
	);
};

export default Events;
	