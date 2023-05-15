# Exercise 1 : Family
#
# Instructions
#
# Create a class called Family and implement the following attributes:
#
# members: list of dictionaries with the following keys : name, age, gender and is_child (boolean).
# last_name : (string)
# Initial members data:
#
# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# ]
#
#
# 2. Implement the following methods: * born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family. * is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not. * family_presentation: a method that prints the family’s last name and all the members’ first name.


family_list = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]
class Family:
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name

    def born(self, **children):
        self.members.append(children)
        print('Congratulations with new baby!')

    def print(self):
        print(self.members)

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name and member['age'] > 18:
                return True
            else:
                return False

    def family_presentation(self):
        print(f'{self.last_name}')
        for member in self.members:
            print(member['name'])

family = Family(family_list, 'White')

family.born(name = 'Tommy', age = 0, gender = 'Male', is_child = True )
family.print()
print(family.is_18('Michael'))
family.family_presentation()

# Exercise 2 : TheIncredibles Family
#
# Instructions
#
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore we need to add the following keys to our dictionaries: power and incredible_name.
#
# Initial members data:
#
# [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
# ]
#
#
# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
#
#
# Add a method called incredible_presentation which :
#
# Prints the family’s last name and all the members’ first name (ie. use the super() function, to call the family_presentation method)
# Prints all the members’ incredible name and power.
#
# Call the incredible_presentation method.
#
#
# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
#
#
# Call the incredible_presentation method again.


incredibles_list = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]
class TheIncredibles(Family):
    def __init__(self, members, last_name):
        super().__init__(members, last_name)

    def use_power(self):
        for member in self.members:
                if member['age'] > 18:
                    print(member['power'])
                else:
                    raise Exception("Member is not 18")

    def incredible_presentation(self):
        super().family_presentation()
        for member in self.members:
            print(f"{member['incredible_name']} - {member['power']}")


incredibles = TheIncredibles(incredibles_list, 'White')
incredibles.use_power()
incredibles.incredible_presentation()
incredibles.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='SuperJack')
incredibles.print()
incredibles.incredible_presentation()




