import turtle

class Circle:
    def __init__(self, radius=0, diameter=0):
        self.radius = float(radius)
        self.diameter = float(diameter)
        self.name = 'Circle_Radius_' + str(self.radius)

    def __str__(self):
        return self.name


    def draw(self):
        turtle.bgcolor('blue')
        turtle.pencolor('yellow')
        turtle.pensize(50)
        turtle.circle(self.radius)

    @classmethod
    def from_radius(cls, radius):
        return cls(radius = radius, diameter = radius*2)

    @classmethod
    def from_diameter(cls, diameter):
        return cls(diameter = diameter, radius = diameter/2)

    # Compute the circle’s area
    def get_area(self):
        return self.radius**2 * 3.14

    # Be able to add two circles together
    def __add__(self, other_circle):
        return self.get_area() + other_circle.get_area()

    # Be able to compare two circles to see which is bigger
    def __gt__(self, other):
        return self.get_area() > other.get_area()

    # Be able to compare two circles and see if there are equal
    def __eq__(self, other):
        return self.get_area() == other.get_area()

    # Be able to put them in a list and sort them
    def list_and_sort(self, *args):
        lst_circle = [self]
        for i in args:
            lst_circle.append(i)
        lst_circle.sort()
        return lst_circle


circleA = Circle.from_diameter(diameter=300)
circleB = Circle.from_radius(radius=200)

circleA.draw()
print(circleA)

print(circleA.radius)
print(circleB.radius)

circleA.get_area()
circleB.get_area()

print('add', circleA + circleB)
print('compare', circleA > circleB)
print('equal', circleA == circleB)
for i in (circleA.list_and_sort(circleB)):
    print(i)







