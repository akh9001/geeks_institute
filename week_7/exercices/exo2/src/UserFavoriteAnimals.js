function UserFavoriteAnimals({favAnimals}) {
	return (
		<div>
			<h3> Favorite Animals :</h3>
			<ul>
				{favAnimals.map((animal, index) => (
					<li key={index}>{animal}</li>
				))}
			</ul>
		</div>
	)
}
export default UserFavoriteAnimals;