import re

matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

# Read column-wise
message = ''
for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        message += matrix[row][col]

# Replace symbols between letters with a space
decoded = re.sub(r'(?<=[A-Za-z])[^A-Za-z]+(?=[A-Za-z])', ' ', message)
print(decoded)
