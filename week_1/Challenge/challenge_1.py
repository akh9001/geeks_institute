#Ask the user for a number and a length.
number = int(input("Please, enter a number: "))
length = int(input("Please, enter a length: "))

# print(f"Number: {number}, Length: {length}")
i = 2
result = [number]
while i <= length :
	result = [*result, number * i]
	i += 1
print(result)