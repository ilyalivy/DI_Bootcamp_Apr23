# Instructions :
#
# Consider this list
#
# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module.

from translate import Translator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translator = Translator(from_lang="fr", to_lang="en")

translations = {}
for word in french_words:
    translation = translator.translate(word)
    translations[word] = translation

print(translations)

