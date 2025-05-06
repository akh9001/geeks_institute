sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of Pastrami sandwich from sandwich_orders.
len = len(sandwich_orders)
i = 0

while len > i :
	if sandwich_orders[i] == "Pastrami sandwich" :
		sandwich_orders.pop(i)
		len -=1
	else :
		i += 1
print(sandwich_orders)
# Create an empty list called finished_sandwiches.
finished_sandwiches = []

# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.

while sandwich_orders :
	sandwich = sandwich_orders.pop(0)
	finished_sandwiches.append(sandwich)

for sandwich in finished_sandwiches :
	print(f"I made your {sandwich}")
