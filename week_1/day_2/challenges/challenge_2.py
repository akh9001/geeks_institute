import re

matrix = [
    "7ii",
    "Tsx",
    "h%?",
    "i #",
    "sM ",
    "$a ",
    "#t%",
    "^r!"
]

# Transpose the matrix to read columns as rows
transposed = list(zip(*matrix))

# Join all the characters column-wise
message = ''.join(''.join(column) for column in transposed)

# Use regex to replace symbols between letters with space
decoded = re.sub(r'(?<=\w)[^a-zA-Z0-9]+(?=\w)', ' ', message)

print(decoded)
