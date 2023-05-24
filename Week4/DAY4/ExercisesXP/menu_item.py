import psycopg2

connection = psycopg2.connect(
    database="RestaurantMenuManager",
    user='postgres',
    password='root',
    host='localhost', #or IP address
    port='5432'
)

cursor = connection.cursor()

class MenuItem:

    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        save_item = f"""
        INSERT INTO Menu_Items (item_name, item_price)
        VALUES ('{self.name}', {self.price})"""
        cursor.execute(save_item)
        connection.commit()

    def delete(self):
        delete_item = f"""
        DELETE FROM Menu_Items WHERE item_name = '{self.name}'
        """
        cursor.execute(delete_item)
        connection.commit()

    def update(self, new_name, new_price):
        update_item = f"""
        UPDATE Menu_Items 
        SET item_name = '{new_name}', item_price = '{new_price}' 
        WHERE item_name = '{self.name}'
        """
        cursor.execute(update_item)
        connection.commit()

item1 = MenuItem('pizza', 8)
# item1.save()
# item1.delete()
# item1.update('burger', 12)

