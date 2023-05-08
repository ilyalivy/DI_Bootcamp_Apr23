# Exercise 1 : Set
#
# Instructions
#
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {1,2,3}

my_fav_numbers.add(4)
my_fav_numbers.add(5)
print(my_fav_numbers)

my_fav_numbers.remove(5)
print(my_fav_numbers)

friend_fav_numbers = {6,7,8}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# Exercise 2: Tuple
#
# Instructions
#
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# No, it's immutable.

# Exercise 3: List
#
# Instructions
#
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
#
# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.pop(0)
print(basket)

basket.remove("Blueberries")
print(basket)

basket.append("Kiwi")
print(basket)

basket.insert(0, "Apples")
print(basket)

print(basket.count("Apples"))

basket.clear()
print(basket)

# Exercise 4: Floats
#
# Instructions
#
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

my_list = []
for i in range(3,11):
    i /= 2
    if i.is_integer():
        i = int(i)
    my_list.append(i)
print(my_list)

# Exercise 5: For Loop
#
# Instructions
#
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

for i in range(1,21):
    print(i)

for i in range(1,21):
    if i % 2 == 0:
     print(i)

# Exercise 6 : While Loop
#
# Instructions
#
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

my_name = 'Ilya'
name = ''
while name.lower() != my_name.lower():
    name = input('What is your name?')

# Exercise 7: Favorite Fruits
#
# Instructions
#
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

fruits = input('Enter your favourite fruits (one or several fruits), separated by a space:')
fruit_list = fruits.split()
any_fruit = input('Enter any fruit:')
if any_fruit in fruit_list:
    print('You chose one of your favorite fruits! Enjoy!')
else:
    print('You chose a new fruit. I hope you enjoy')

# Exercise 8: Who Ordered A Pizza ?
#
# Instructions
#
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

all_toppings = []
total_price = 10
while True:
    pizza_toppings = input('Enter pizza topping (to stop enter quit):')
    if pizza_toppings.lower() == 'quit':
        break
    print(f'We will add {pizza_toppings} to your pizza')
    all_toppings.append(pizza_toppings)
    total_price += 2.5

print(f"{' '.join(all_toppings)} on your pizza pie and total price is {total_price}")

# Exercise 9: Cinemax
#
# Instructions
#
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
#
# Ask a family the age of each person who wants a ticket.
#
# Store the total cost of all the family’s tickets and print it out.
#
#


total_cost = 0

while True:
    age = input('Enter age of each family member who wants a ticket one by one (at the end enter finish):')
    if age.lower() == 'finish':
     break
    age = int(age)
    if age <= 3:
     total_cost += 0
    elif 3 < age <= 12:
     total_cost += 10
    else:
     total_cost += 15
print(f'Total cost for tickets is ${total_cost}')


#A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

names = ['Jim', 'Ben', 'Kate']

approved_names = []

for name in names:
    age = int(input(f'How old are you, {name}?'))
    if age < 16 or age > 21:
     approved_names.append(name)

print(approved_names)

# Exercise 10 : Sandwich Orders
#
# Instructions
#
# sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
#
# Use the above list called sandwich_orders.
# Make an empty list called finished_sandwiches.
# As each sandwich is made, move it to the list of finished sandwiches.
# After all the sandwiches have been made, print a message listing each sandwich that was made , such as I made your tuna sandwich.

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]

sandwich_orders.extend(["Pastrami sandwich", "Pastrami sandwich"])
print(sandwich_orders)
print('The deli has run out of pastrami')
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []
for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
    print(f'I made your {sandwich}')
print(finished_sandwiches)

# Exercise 11 : Sandwich Orders#2
#
# Instructions
#
# Using the list sandwich_orders from the previous exercise, make sure the sandwich ‘pastrami’ appears in the list at least three times.
# Add code near the beginning of your program to print a message saying the deli has run out of pastrami, and then use a while loop to remove all occurrences of ‘pastrami’ from sandwich_orders.
# Make sure no pastrami sandwiches end up in finished_sandwiches.