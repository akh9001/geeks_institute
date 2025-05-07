brand = {
	"name": "Zara",
	"creation_date": 1975, 
	"creator_name" : "Amancio Ortega Gaona", 
	"type_of_clothes" : ["men", "women", "children", "home"], 
	"international_competitors" : ["Gap", "H&M", "Benetton"], 
	"number_stores" : 7000, 
	"major_color" :
	{
		"France": "blue", 
		"Spain": "red", 
		"US": ["pink", "green"]
	}
}
print("Brand :/n", brand)
print("-----------------------------------\n")

# 2 Change number of stores :

brand["number_stores"] = 2
print("Brand after change of nbr_store : \n", brand)
print("-----------------------------------\n")

# 3 Zaras clients are
print("Zaras clients are : \n")
for type in brand["type_of_clothes"] :
	print(type)
print("-----------------------------------\n")

# 4 Add a key called country_creation with a value of Spain.
brand["country_creation"] = 'Spain'

print("Brand after adding creation country  : \n", brand)
print("-----------------------------------\n")

# 5 if the key international_competitors is in the dictionary. If it is, add the store Desigual

if "international_competitors" in brand :
	brand["international_competitors"].append("Desigual")
print("international_competitors : ", brand["international_competitors"])
print("-----------------------------------\n")

# 6. Delete the information about the date of creation.
del brand["creation_date"]
print("Brand after delete creation date  : \n", brand)
print("-----------------------------------\n")

# 7. Print the last international competitor.
print("The last international competitor : ", brand["international_competitors"][-1])

# 8. Print the major clothes colors in the US.
print("-----------------------------------\n")
print("The major clothes colors in the US : ", brand["major_color"]["US"])

# 9. Print the amount of key value pairs (ie. length of the dictionary).
print("-----------------------------------\n")
print("length of a dictionary : ", len(brand))

# 10. Print the keys of the dictionary.
print("-----------------------------------\n")
print("The keys of the dictionary : ", brand.keys()) 

# 11. Create another dictionary called more_on_zara with the following details:

more_on_zara = {
	"creation_date" : 1975,
	"number_stores" : 10000
}

# 12. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
print("-----------------------------------\n")
brand.update(more_on_zara)
# 13. Print the value of the key number_stores. What just happened ?
print("-----------------------------------\n")
print("The value of the key number_stores : ")
for key, val in brand.items() :
	print(f"Key : {key},	Val : {val}")
print("We notice that the value of number_stores key changed, exists in both brand and more_on_zara,  Python dictionaries are key-based mappings where each key must be unique")


