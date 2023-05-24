from menu_item import MenuItem
from menu_manager import MenuManager

# Create a file called menu_editor.py , which will have the following functions:

# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.
def show_user_menu():
    print('Program Menu:')
    print('V: View an Item')
    print('A: Add an Item')
    print("D: Delete an Item")
    print("U: Update an Item")
    print("S: Show the Menu")
    print("E: Exit the Program")

# add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.
def add_item_to_menu():
    name = input("Enter the item's name: ")
    price = input("Enter the item's price: ")
    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.
def remove_item_from_menu():
    name = input("Enter the item's name to delete: ")
    item = MenuItem(name, 0)
    item.delete()
    print("Item was deleted successfully.")


# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.
def update_item_from_menu():
    current_name = input("Enter the item's current name: ")
    current_price = input("Enter the item's current price: ")
    new_name = input("Enter the item's new name: ")
    new_price = input("Enter the item's new price: ")
    item = MenuItem(current_name, current_price)
    item.update(new_name, new_price)
    print("Item was updated successfully.")


# show_restaurant_menu() - print the restaurant’s menu.
def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("Restaurant Menu")
        for item in items:
            print(f"Name: {item[1]}, Price: {item[2]}")
    else:
        print("Restaurant menu is empty.")


def menu_editor():
    while True:
        show_user_menu()
        choice = input("Enter your choice: ")

        if choice.upper() == "V":
            name = input("Enter the item's name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Name: {item[0]}, Price: {item[1]}")
            else:
                print("Item not found.")

        elif choice.upper() == "A":
            add_item_to_menu()

        elif choice.upper() == "D":
            remove_item_from_menu()

        elif choice.upper() == "U":
            update_item_from_menu()

        elif choice.upper() == "S":
            show_restaurant_menu()

        elif choice.upper() == "E":
            show_restaurant_menu()
            print("Exiting the program.")
            break

        else:
            print("Invalid choice. Please try again.")


menu_editor()