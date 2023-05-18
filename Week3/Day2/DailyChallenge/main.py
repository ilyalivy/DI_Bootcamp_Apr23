# Instructions :
#
# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.
#
# The Pagination class will accept 2 parameters:
#
# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:
#
# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
#
# p = Pagination(alphabetList, 4)
#
#
# The Pagination class will have a few methods:
#
# getVisibleItems() : returns a list of items visible depending on the pageSize
# So for example we could use this method like this:
#
# p.getVisibleItems()
# # ["a", "b", "c", "d"]
# You will have to implement various methods to go through the pages such as:
# prevPage()
# nextPage()
# firstPage()
# lastPage()
# goToPage(pageNum)
#
# Here’s a continuation of the example above using nextPage and lastPage:
#
# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
#
# p = Pagination(alphabetList, 4)
#
# p.getVisibleItems()
# # ["a", "b", "c", "d"]
#
# p.nextPage()
#
# p.getVisibleItems()
# # ["e", "f", "g", "h"]
#
# p.lastPage()
#
# p.getVisibleItems()
# # ["y", "z"]
#
#
# Notes
#
# The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
# The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
# Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
# If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).

import math

class Pagination:
    def __init__(self, items = None, page = 10):
        self.items = items
        self.page_size = int(page)
        self.current_page = 1
        self.total_pages = math.ceil(len(self.items)/self.page_size)

    def get_visible_items(self):
        return self.items[self.page_size * (self.current_page -1): self.page_size * self.current_page]

    def prev_page(self):
        print(f'you are on page {self.current_page}')
        if self.current_page > 1:
            self.current_page -= 1
            print(f'you moved to page {self.current_page}')
        else:
            print(f'you requested a wrong page')
            self.current_page = self.total_pages
            print(f'you moved to page {self.current_page}')
        return self

    def next_page(self):
        print(f'you are on page{self.current_page}')
        if self.current_page < self.total_pages:
            self.current_page += 1
            print(f'you moved to page {self.current_page}')
        elif self.current_page == self.total_pages:
            print('you returned to the first page')
            self.current_page = 1
        return self
    def first_page(self):
        self.current_page = 1
        return self

    def last_page(self):
        self.current_page = self.total_pages
        return self

    def go_to_page(self, page_num):
        if page_num <= 0:
            print(f'you requested a wrong page, you moved to the first page')
            self.current_page = 1
        else:
            if page_num <= self.total_pages:
                self.current_page = page_num
            else:
                print(f'you requested a wrong page, you moved to the last page')
                self.current_page = self.total_pages

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

pages = Pagination(alphabetList, 3)
print(pages.get_visible_items())
pages.prev_page()
print(pages.get_visible_items())
pages.next_page()
print(pages.get_visible_items())
pages.first_page()
print(pages.get_visible_items())
pages.last_page()
print(pages.get_visible_items())
pages.go_to_page(5)
print(pages.get_visible_items())