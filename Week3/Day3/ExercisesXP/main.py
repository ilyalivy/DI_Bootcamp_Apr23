# Exercise 1 : Built-In Functions
#
# Instructions
#
# Python has many built-in functions.
# If you feel that you don’t know how to properly implement them take a look at the python documentation online.
#
# Write a program which prints the results of the following python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own documentation which explains the execution of your code. Take a look at the doc method on google for help.

# def my_abs(arg:int)-> int:
#     '''abs() is a build-in functions that returns the absolute value'''
#     return print(abs(arg))
#
# my_abs(1234)
# print(my_abs.__doc__)

def func():
    class Num:
        """
        This is the documentation of the class
        """
        def __init__(self, value):
            self.value = value
        def __abs__(self):
            return abs(self.value)
        def __int__(self):
            return int(self.value)
    number = Num(-7.4)
    print(number.__abs__())
    print(number.__int__())
    print(number.__doc__)
func()

# Exercise 2: Currencies
#
# Instructions

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}{'s' if self.amount != 1 else ''}"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}{'s' if self.amount != 1 else ''}"

    def __add__(self, other):
        if isinstance(other, Currency) and other.currency != self.currency:
            raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        elif isinstance(other, Currency):
            return Currency(self.currency, self.amount + other.amount)
        else:
            return Currency(self.currency, self.amount + other)

    def __iadd__(self, other):
        return self.__add__(other)

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))  # '5 dollars'
print(int(c1))  # 5
print(repr(c1))  # '5 dollars'

print(c1 + 5)  # 10
print(c1 + c2)  # 15

print(c1)  # '5 dollars'

c1 += 5
print(c1)  # '10 dollars'

c1 += c2
print(c1)  # '20 dollars'

print(c1 + c3)  # TypeError: Cannot add between Currency type <dollar> and <shekel>

# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)
#
# >>> str(c1)
# '5 dollars'
#
# >>> int(c1)
# 5
#
# >>> repr(c1)
# '5 dollars'
#
# >>> c1 + 5
# 10
#
# >>> c1 + c2
# 15
#
# >>> c1
# 5 dollars
#
# >>> c1 += 5
# >>> c1
# 10 dollars
#
# >>> c1 += c2
# >>> c1
# 20 dollars
#
# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>