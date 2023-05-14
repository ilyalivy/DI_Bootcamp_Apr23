# Exercise 1: Cats
#
# Instructions
#
# Using this class
#
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat('Tom', 5)
cat2 = Cat('Jerry', 7)
cat3 = Cat('Jack', 3)

def oldestcat(cat1, cat2, cat3):
    if cat1.age > cat2.age > cat3.age:
        return cat1
    elif cat2.age > cat1.age > cat3.age:
        return cat2
    else:
        return cat3

oldest_cat = oldestcat(cat1, cat2, cat3)
print(f'The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.')


# Exercise 2 : Dogs
#
# Instructions
#
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f'{self.name} goes woof!')

    def jump(self):
        print(f'{self.name} jumps {self.height * 2} cm high!')

davids_dog = Dog('Rex', 50)

print(f'{davids_dog.name} is {davids_dog.height} cm')
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog('Teacup', 20)

print(f'{sarahs_dog.name} is {sarahs_dog.height} cm')
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f'{davids_dog.name}')
else:
    print(f'{sarahs_dog.name}')


# Exercise 3 : Who’s The Song Producer?
#
# Instructions
#
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:
#
# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
#
#
# Then, call the sing_me_a_song method. The output should be:
#
# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for element in self.lyrics:
            print(element)

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


# Exercise 4 : Afternoon At The Zoo
#
# Instructions
#
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example
#
# {
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }
#
#
# Create a method called get_groups that prints the animal/animals inside each group.
#
# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        self.new_animal = new_animal
        self.animals.append(self.new_animal)

    def get_animals(self):
        for i in self.animals:
          print(i)

    def sell_animal(self, animal_sold):
        self.animal_sold = animal_sold
        self.animals.remove(self.animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        self.grouped_animals = {}
        group_key = 1
        current_letter = sorted_animals[0][0]

        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter == current_letter:
                if group_key not in self.grouped_animals:
                    self.grouped_animals[group_key] = [animal]
                else:
                    self.grouped_animals[group_key].append(animal)
            else:
                current_letter = first_letter
                group_key += 1
                self.grouped_animals[group_key] = [animal]
        return self.grouped_animals

    def get_groups(self):
        for key, value in self.grouped_animals.items():
            print(key, value)

ramat_gan_safari = Zoo('Ramat Gan Safari')
print(ramat_gan_safari.zoo_name)
ramat_gan_safari.add_animal('Giraffe')
ramat_gan_safari.add_animal('Ape')
ramat_gan_safari.add_animal('Wolf')
ramat_gan_safari.add_animal('Baboon')
ramat_gan_safari.add_animal('Bear')
ramat_gan_safari.add_animal('Elephant')
ramat_gan_safari.add_animal('Emu')
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal('Wolf')
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()