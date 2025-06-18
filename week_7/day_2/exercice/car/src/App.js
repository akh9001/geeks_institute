import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import FavoriteColor from './Components/FavoriteColor';

function App() {
	const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <div className="container">
		<Car name={carinfo.name} model={carinfo.model} />
		<Events />
		<Phone />
		<FavoriteColor />
    </div>
  );
}

export default App;
