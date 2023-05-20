# Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.
#
# It should do the following:
# Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.
#
# If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
# Only alphabetic characters are allowed. No numbers or special characters.
# Whitespace should be removed from the start and end of the user’s input.
#
# Once your code has decided that the user’s input is valid, it should find out the following:
# All possible anagrams to the user’s word.
# Create an AnagramChecker instance and apply it to the steps created above.
# Display the information about the word in a user-friendly, nicely-formatted message such as:
#
#
# YOUR WORD :”MEAT”
# this is a valid English word.
# Anagrams for your word: mate, tame, team.

from anagram_checker import AnagramChecker

def display_word_info(word, valid, anagrams):
    print(f"YOUR WORD: '{word}'")
    if valid:
        print("This is a valid English word")
    else:
        print("This is not a valid English word")
    print(f"Anagrams for your word: {', '.join(anagrams)}")

def validate_input(word):
    if len(word.split()) > 1:
        print("Please enter only one word")
        return False
    if not word.isalpha():
        print("Please enter alphabetic characters only")
        return False
    return True

def main():
    wordlist_file = 'sowpods.txt'
    checker = AnagramChecker(wordlist_file)

    while True:
        print("\n1. Input a word")
        print("2. Exit")
        choice = input("Enter your choice: ")

        if choice == "1":
            word = input("Enter a word: ").strip()
            if validate_input(word):
                valid = checker.is_valid_word(word)
                anagrams = checker.get_anagrams(word)
                display_word_info(word, valid, anagrams)
        elif choice == "2":
            break
        else:
            print("Invalid choice. Please try again.")

main()