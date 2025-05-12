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