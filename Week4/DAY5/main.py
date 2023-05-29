import random

p1 = 10
p2 = 10

while p1 > 0 and p2 > 0:
    print(f'You have {p2} stone(s).\n')
    print('Computer\'s move')

    bet1 = random.randint(1, p1)

    while True:
        try:
            choice2 = int(input('Please choose 1 or 2 stone(s): '))
            if choice2 != 1 and choice2 != 2:
                raise ValueError
            break
        except ValueError:
            print('Invalid input.')

    turn1 = random.randint(0, 1)
    if turn1 == 0:
        print('Computer\'s answer: Even!')
    else:
        print('Computer\'s answer: Odd!')



    if choice2 % 2 == turn1:
        print('Computer won!')
        p2 -= bet1
        p1 += bet1
    else:
        print('You won!')
        p2 += bet1
        p1 -= bet1

    print(f'Computer bet {bet1} stone(s)')



    if p1 > 0 and p2 > 0:
        print(f'You have {p2} stone(s).\n')
        print('Now your move')
        # bet2 = int(input('Enter your bet: '))

        while True:
            try:
                bet2 = int(input('Enter your bet: '))
                if bet2 < 1 or bet2 > p2:
                    raise ValueError
                break
            except ValueError:
                print('Invalid input. You can enter number from range of stones you have.')

        while True:
            turn2_word = input('Please enter "Even!" or "Odd!": ')
            if turn2_word != 'Even!' and turn2_word != 'Odd!':
                print('Invalid Input.')
            else:
                break

        choice1 = random.randint(1, 2)
        # turn2_word = input('Enter "Even!" or "Odd!": ')
        turn2 = -1
        if turn2_word == 'Even!':
            turn2 = 0
        elif turn2_word == 'Odd!':
            turn2 = 1

        print(f'Computer\'s choice: {choice1} stone(s)')

        if choice1 % 2 == turn2:
            print('Computer won!')
            p2 -= bet2
            p1 += bet2
        else:
            print('You won!')
            p2 += bet2
            p1 -= bet2


if p1 <= 0:
    print('Congratulations! You won the game! Here is your recipe:')
else:
    print('Sorry, You lost the game')