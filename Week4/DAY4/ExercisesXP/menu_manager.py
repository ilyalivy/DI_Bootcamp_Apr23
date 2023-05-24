import psycopg2

connection = psycopg2.connect(
    database="RestaurantMenuManager",
    user='postgres',
    password='root',
    host='localhost', #or IP address
    port='5432'
)

cursor = connection.cursor()

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        query = f"""
        SELECT item_name, item_price FROM Menu_Items WHERE item_name = '{name}'
        """
        cursor.execute(query)
        result = cursor.fetchone()
        if result:
            return result
        else:
            return None

    @classmethod
    def all_items(cls):
        query = f"""
        SELECT * FROM Menu_items
        """
        cursor.execute(query)
        result = cursor.fetchall()
        return result

item2 = MenuManager.get_by_name('pizza')
print(item2)

items = MenuManager.all_items()
print(items)