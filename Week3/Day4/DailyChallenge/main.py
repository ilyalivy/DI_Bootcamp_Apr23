# Instructions :
#
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.
#
#
#
# Part I
#
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
#
# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code
#
# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

# Part II
#
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
#
# Implement a classmethod that returns a Text instance but with a text file:
#
#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.
#
#
# Now, use the provided the_stranger.txt file and try using the class you created above.

class Text:
    def __init__(self, a):
        self.a = a
        self.text_lower = self.a.replace('.', '').lower()
        self.text_list = self.text_lower.split()

    def word_frequency(self, word):
        if word not in self.text_list:
            return None
        else:
            return f"The word '{word}' appears {self.text_list.count(word)} times in the text."

    def most_common_word(self):
        word_count = {}
        for word in self.text_list:
            if word in word_count:
                word_count[word] += 1
            else:
                word_count[word] = 1
        print('Most common word(s):')
        max_count = max(word_count.values())
        return ', '.join([word for word, count in word_count.items() if count == max_count])

    def most_unique_words(self):
        word_count = {}
        unique_words = []
        for word in self.text_list:
            if word in word_count:
                word_count[word] += 1
            else:
                word_count[word] = 1
        for key, value in word_count.items():
            if value == 1:
                unique_words.append(key)
        return unique_words


    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            text = file.read()
        return cls(text)


text_obj = Text('A good book would sometimes cost as much as a good house.')

print(text_obj.word_frequency('house'))
print(text_obj.most_common_word())
print(text_obj.most_unique_words())


text_from_file = Text.from_file('the_stranger.txt')

print(text_from_file.word_frequency('sun'))
print(text_from_file.most_common_word())
print(text_from_file.most_unique_words())