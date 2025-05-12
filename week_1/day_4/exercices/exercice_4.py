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

