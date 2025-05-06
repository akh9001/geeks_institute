word = input("user's word : ")
# char_set = set(word)
# result =''.join(char_set)
result = ""

print("Word witout dup : ", word)

for char in word :
	if char not in result :
		result += char
print("Word witout dup : ", result)