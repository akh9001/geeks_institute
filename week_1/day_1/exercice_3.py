# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

my_name = "asmaa"

your_name = input("What's your name 🤔?").strip().lower()

if your_name == my_name :
	print(f"Whoa! We share the same name 🎊, {my_name}! Are we long-lost twins 😂?")
else :
	print(f"Hi {your_name} 👋🏼! Nice to meet you. But I must say, {my_name} is a pretty cool name too 😎!")
