import { useState, useEffect } from "react";

const FavoriteColor = () => {
	const [color, setColor] = useState("Red");
	 useEffect(() => {
		 alert(`useEffect reached`);
	  }, []);
	
	return (
		<>
			<h1>My Favorite Color is {color}</h1>
			<button
				onClick={() => {
					setColor("Blue");
				}}
			>
				Change Favorite Color to Blue
			</button>
		</>
	);
	};
export default FavoriteColor;