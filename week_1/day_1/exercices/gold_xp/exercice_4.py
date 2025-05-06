names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name = input("Please Enter a name : ").capitalize().strip()

if name in names :
	print(f'Index : {names.index(name)}')
else :
	print(f"'{name}' not found in the list.")