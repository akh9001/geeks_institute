# if a person is under the age of 3, the ticket is free. < 3 => free
# if they are between 3 and 12, the ticket is $10. 3 <= age <12 => $10
# if they are over the age of 12, the ticket is $15. >= 12 => $15

default = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
def get_price(age) :

	cost = 0
	match age :
		case _ if age < 3:
			cost += 0
		case _ if 3 <= age < 12:
			cost += 10
		case _ if 12 <= age :
			cost += 15
	return cost

def get_family_cost (family= default) :

	total_price = 0
	for _,age in family.items() :
		total_price +=  get_price(age)

	print("the family’s total cost for the movies is : ", total_price, "\n")

# Getting price for the default family
print("Default Family :", default)
get_family_cost()

# Getting price for the family's user
family = {}

num_members = int(input("How many family members do you want to add? "))

for _ in range(num_members):
    name = input("Enter member's name: ")
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age

print("Family 's user:", family)
get_family_cost(family)