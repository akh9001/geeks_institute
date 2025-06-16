import UserFavoriteAnimals from './UserFavoriteAnimals';

function App() {
	const user = {
		firstName: 'Bob',
		lastName: 'Dylan',
		favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
	  };
  return (
    <div className="App">
      <header className="App-header">
		<h3>firstName : {user.firstName}</h3>
		<h3>lastName : {user.lastName}</h3>
      </header>
		  <UserFavoriteAnimals favAnimals={user.favAnimals}/>
    </div>
  );
}

export default App;
