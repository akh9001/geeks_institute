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
