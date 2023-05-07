# Instructions
#
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.

string = input('Enter 10-length-char string')
string_length = len(string)
if string_length < 10:
    print('string not long enough')
elif string_length > 10:
    print('string too long')
else:
    print(string)

# Then, print the first and last characters of the given text.

print(string[0])
print(string[-1])

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed.

word = ''
for letter in string:
    word += letter
    print(word)

# Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
#
# Hlrolelwod

import random
string_list = list(string)
random.shuffle(string_list)
shuffled_string = "".join(string_list)
print(shuffled_string)