#  Anagram Checker
#
# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.
#
#
#
# Instructions
#
# First Download this text file : right click –> Save As
#
# Create a new file called anagram_checker.py which contains a class called AnagramChecker.
#
# The class should have the following methods:
# __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
#
# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)
#
# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
#
# Note: None of the methods in the class should print anything.

class AnagramChecker:
    def __init__(self, wordlist_file):
        with open(wordlist_file, 'r') as file:
            self.wordlist = set(word.strip().lower() for word in file)

    def is_valid_word(self, word):
        return word.lower() in self.wordlist

    def get_anagrams(self, word):
        word = word.lower()
        anagrams = []
        for entry in self.wordlist:
            if self.is_anagram(word, entry):
                anagrams.append(entry)
        return anagrams

    @staticmethod
    def is_anagram(word1, word2):
        return sorted(word1) == sorted(word2)