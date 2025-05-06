list_elt = range(1, 21)
# print(list(list_elt))
for item in list_elt :
	print(item)

for i, item in enumerate(list_elt) :
	if not (i % 2) :
		print(f"Index {i}: {item}")