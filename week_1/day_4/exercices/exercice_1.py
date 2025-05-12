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