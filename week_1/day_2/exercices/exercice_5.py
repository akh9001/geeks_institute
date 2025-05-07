import random

def guess_the_number(number) :
	if number < 1 or number > 100 :
		number = int(input("You should enter a number between 1 and 100 : "))
		return guess_the_number(number)
	rand = random.randrange(1,101) #101 isnt included
	print(f"{"Woow, you guessed it right" if rand == number else "Good Luck next time !"}\n The Number was : ", rand)

guess_the_number(132)

