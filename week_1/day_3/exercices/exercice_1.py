class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
cat1 = Cat("Milo", 3)
cat2 = Cat("Luna", 5)
cat3 = Cat("Oliver", 2)

# Step 2: Create a function to find the oldest cat
def find_oldest_cat(c1, c2, c3):
    return max([c1, c2, c3], key=lambda cat: cat.age)

# Step 3: Print the oldest cat’s details
oldest = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")
