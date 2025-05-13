#exercice 1:
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

# exercice 2 :
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print("goes woof!")

    def jump(self):
        print(f"jumps {self.height * 2} cm high!")

# Step 2: Create Dog Objects
davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

# Step 3: Print Dog Details and Call Methods
for dog in [davids_dog, sarahs_dog]:
    print(f"{dog.name} is {dog.height} cm tall.")
    dog.bark()
    dog.jump()

# Step 4: Compare Dog Sizes
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger.")
else:
    print(f"{sarahs_dog.name} is bigger.")

#exercice 3 :

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# Example
stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()

# exercice 4 :
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        grouped = {}
        for animal in self.animals:
            key = animal[0].upper()
            if key not in grouped:
                grouped[key] = []
            grouped[key].append(animal)
        return grouped

    def get_groups(self):
        groups = self.sort_animals()
        for group in groups:
            print(f"{group}: {groups[group]}")

# Step 2: Create a Zoo Object
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Step 3: Call The Zoo Methods
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.sell_animal("Cat")
ramat_gan_safari.get_animals()
ramat_gan_safari.get_groups()
