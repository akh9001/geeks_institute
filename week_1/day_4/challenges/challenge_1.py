# Import math library
import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0  # starts at 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def next_page(self):
        if (self.current_idx + 1) * self.page_size < len(self.items):
            self.current_idx += 1
        return self

    def prev_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def go_to_page(self, page_number):
        if page_number < 1 :
            raise ValueError(f"Page number {page_number} is out of range.")
        elif 1 <= page_number < self.total_pages():
            self.current_idx = page_number - 1
        else :
            self.last_page()
        return self
class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_page = 0  # 0-based index

    def get_visible_items(self):
        start = self.current_page * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if not (1 <= page_num <= self.total_pages()):
            raise ValueError(f"Page number {page_num} is out of range.")
        self.current_page = page_num - 1

    def first_page(self):
        self.current_page = 0
        return self

    def last_page(self):
        self.current_page = self.total_pages() - 1
        return self

    def next_page(self):
        if self.current_page < self.total_pages() - 1:
            self.current_page += 1
        return self

    def previous_page(self):
        if self.current_page > 0:
            self.current_page -= 1
        return self

    def total_pages(self):
        return (len(self.items) + self.page_size - 1) // self.page_size

    @property
    def current_idx(self):
        return self.current_page  # 0-based internal index

    def __str__(self):
        return "\n".join(self.get_visible_items())

    def total_pages(self):
        return (len(self.items) + self.page_size - 1) // self.page_size
    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

try:
    p.go_to_page(10)
    print(p.current_idx + 1)
except ValueError as e:
    print(e)
# Output: Page number out of range

try:
    p.go_to_page(0)
except ValueError as e:
    print(e)
