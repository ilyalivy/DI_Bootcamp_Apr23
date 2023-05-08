# Challenge 1
#
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples
#
# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
#
# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
#
# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

number = int(input('Enter number:'))
length = int(input('Enter length:'))

new_list = []

my_list = list(range(1, length + 1))
for i in my_list:
    i *= number
    new_list.append(i)
print(new_list)

# Challenge 2
#
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples
#
# user's word : "ppoeemm" ➞ "poem"
#
# user's word : "wiiiinnnnd" ➞ "wind"
#
# user's word : "ttiiitllleeee" ➞ "title"
#
# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

string = input('Enter a string:')

new_string = string[0]
last_char = string[0]

for char in string[1:]:
    if char != last_char:
     new_string += char
     last_char = char
print(new_string)