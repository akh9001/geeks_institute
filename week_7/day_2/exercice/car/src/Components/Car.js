import { useState } from 'react';
import Garage from './Garage';

function Car({name, model}){
	const [color, setColor] = useState("red");

	return (
		<div className="car">
			<h2>This {color} Car Name : {name}, Model : {model}</h2>
			<Garage size="small" />
		</div>
	);
}

export default Car;