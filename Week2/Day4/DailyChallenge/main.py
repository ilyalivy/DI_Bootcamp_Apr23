matrix = [
    [7, 'i', 3],
    ['T', 's', 'i'],
    ['h', '%', 'x'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

sentence = ''
lst1 = []
lst2 = []
lst3 = []

import string
letters = list(string.ascii_letters)

for lst in matrix:
    lst1.append(lst[0])
    lst2.append(lst[1])
    lst3.append(lst[2])

for char in lst1:
    if char in letters:
        sentence += char
    else:
        sentence += ' '

for char in lst2:
    if char in letters:
        sentence += char
    else:
        sentence += ' '

for char in lst3:
    if char in letters:
        sentence += char
    else:
        continue

sentence = ' '.join(sentence.split())

print(sentence)
