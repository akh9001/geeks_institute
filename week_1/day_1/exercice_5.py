# Create a set called my_fav_numbers with all your favorites numbers.

my_fav_numbers = {18, 9, 5, 99, 10}

print ("My favorite set of numbers : ", my_fav_numbers)

# Add 2 elts to the set :

my_fav_numbers.add(8)
my_fav_numbers.add(25)

print ("My favorite set of numbers after adding 2 etls '25': ", my_fav_numbers)

# Remove last elt :

my_fav_numbers.remove(25)
# my_fav_numbers.pop()

print("My set after removing the last elt entred: ", my_fav_numbers)

# create a set friend_fav_numbers with my friend’s favorites numbers

friend_fav_numbers = {12, 5, 18, 0}
print ("My friend favorite set of numbers : ", friend_fav_numbers)

# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers

# Using | operator :

our_fav_numbers = my_fav_numbers | friend_fav_numbers

print ("My friend & I favorite set of numbers : ", our_fav_numbers)
