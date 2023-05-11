# Instructions
#
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:
#
# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world
#
# sequence = input('Enter comma separated sequence of words:')

sorted_sequence = ','.join([word for word in sorted(sequence.split(','))])

print(sorted_sequence)

# sorted_sequence = ','.join(sorted(sequence.split(',')))
#
# print(sorted_sequence)

# sequence_list = sequence.split(',')
#
# sorted_sequence_list = sorted(sequence_list)
#
# new_sequence = ','.join(sorted_sequence_list)
#
# print(new_sequence)



