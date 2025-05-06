import random

# Ask the user to input a number from 1 to 9
user_guess = int(input("Enter a number from 1 to 9: "))

# Get a random number between 1 and 9
random_number = random.randint(1, 9)

# Compare and print result
if user_guess == random_number:
    print("Winner!")
else:
    print("Better luck next time.")
    print(f"The correct number was: {random_number}")
