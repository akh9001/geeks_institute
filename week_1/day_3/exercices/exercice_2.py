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
