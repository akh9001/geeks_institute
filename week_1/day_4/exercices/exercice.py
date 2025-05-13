# exercice 1 :
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age
    def walk(self):
        return f'{self.name} is just walking around'
    def __repr__(self):
        return f"{self.__class__.__name__}(name={self.name}, age={self.age})"

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    color = "Gray"
    def __init__(self, name, age, eye_color="Blue") :
        super().__init__(name, age)
        self.eye_color = eye_color

    def talkative(self):
        print(f"{self.name} is being very vocal, as Siamese cats usually are!")
    def __repr__(self):
        return f"Siamese(name={self.name}, age={self.age}, eye_color={self.eye_color})"

all_cats = []
bengal_obj = Bengal("Bengy", 2)
chartreux_obj = Chartreux("Chatou", 8)
siamese_obj = Siamese("Siam", 18)

all_cats.extend([bengal_obj, chartreux_obj, siamese_obj])
print(all_cats)
sara_pets = Pets(all_cats)
sara_pets.walk()

# exercice 2 :

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return f"{self.weight} / {self.age * 10}"

    def fight(self, other_dog):
        my_strength = self.run_speed() * self.weight
        other_strength = other_dog.run_speed() * other_dog.weight
        if my_strength > other_strength :
              return f"{self.name} Won the fight !"
        elif my_strength < other_strength :
              return f"{other_dog.name} Won the fight !"
        return "Equality !"
    
# Step 2: Create dog instances
dog1 = Dog("Doggy", 12, 20)
dog2 = Dog("Black", 5, 15)

# Step 3: Test dog methods
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

# exercie 3 :
from exercice_2 import Dog
import random

class PetDog(Dog):
	def __init__(self, name, age, weight,trained = False):
		super().__init__(name, age, weight)
		self.trained = trained
	def train(self):
		self.bark()
		self.trained = True
	def play(self,*args):
		dog_names = [self.name] + list(args)
		print(f"{', '.join(dog_names)} all play together")
	def do_a_trick(self) :
		tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
		if self.trained == True :
			print(f"{self.name} {random.choice(tricks)}")
		
# Test PetDog methods
my_dog = PetDog("Fido", 2, 10)
my_dog.train()
my_dog.play("Buddy", "Max")
my_dog.do_a_trick()

# exercice 4 : 

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""  # Initialized as empty string

    def is_18(self):
        return self.age >= 18

person1 = Person("Alice", 20)
person2 = Person("Bob", 16)

print("Alice is adult: ", person1.is_18())  # Output: True
print("Bob is adult: ", person2.is_18())  # Output: False

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name
        self.members.append(new_member)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f"{first_name}, You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print(f"Sorry {first_name}, you are not allowed to go out with your friends.")
                return
        print(f"No family member with the name {first_name} found.")

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")

my_family = Family("KHALIDY")
my_family.born("Asmaa", 29)
my_family.born("Nouhaila", 28)
my_family.born("Jihad", 24)

my_family.check_majority("Jihad")
my_family.family_presentation()

