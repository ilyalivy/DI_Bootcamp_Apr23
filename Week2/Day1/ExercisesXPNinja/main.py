my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit
           esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum."""
length_text = len(my_text)
print(length_text)



longest_sentence = ""

while True:
    sentence = input("Enter the longest sentence you can without the letter 'A': ")
    if "A" in sentence:
        print("Sorry, your sentence contains the letter 'A'. Please try again.")
        continue
    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print("Congratulations! You set a new record with a sentence of length", len(longest_sentence), ":")
        print(longest_sentence)