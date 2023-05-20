from game import Game

def get_user_menu_choice():
    user_choice = input("'1': Play a new game\n'2': Show scores\n'3': Quit\n ")
    return user_choice

def print_results(final_results):
    return print(f'''Thank you for playing. Here are the final results: \n
    You won: {final_results['Win']} times
    You lost {final_results['Loss']} times
    You tie {final_results['Tie']} times\n''')

def main():
    final_results = {
        'Win': 0,
        'Loss': 0,
        'Tie': 0
    }
    user_choice = get_user_menu_choice()
    while user_choice != '3':
        if user_choice == '1':
            new_game = Game()
            final_results[new_game.play()] += 1
            user_choice = get_user_menu_choice()
        else:
            print_results(final_results)
            user_choice = get_user_menu_choice()

main()