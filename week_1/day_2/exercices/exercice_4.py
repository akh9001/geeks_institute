#Write a function called describe_city() that accepts the name of a city and its country as parameters.
def describe_city(city, country="Unknown Country") :
	print(f"{city.capitalize()} is in {country.capitalize()}")

describe_city("Casa", "Morocco")
describe_city("Michlifen")