# Instructions :
#
# Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.

import requests
import time

def measure_page_load_time(url):
    start_time = time.time()
    response = requests.get(url)
    end_time = time.time()
    load_time = end_time - start_time
    return load_time

#Testing func with multiple websites
websites = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]

for website in websites:
    load_time = measure_page_load_time(website)
    print(f'{website}: {load_time} seconds')