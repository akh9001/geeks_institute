
# 📌 Python Data Structures Overview

This guide summarizes the most common Python data structures: **List**, **Tuple**, **Set**, **Dictionary**, and **String** — with their differences, methods, and iteration patterns.

---

## 🧠 Comparison Table

| Structure      | Syntax Example                  | Ordered | Mutable | Duplicates | Indexable | Use Case |
|----------------|----------------------------------|---------|---------|------------|-----------|----------|
| **List**       | `my_list = [1, 2, 3]`           | ✅ Yes  | ✅ Yes  | ✅ Yes     | ✅ Yes    | Ordered, editable collection |
| **Tuple**      | `my_tuple = (1, 2, 3)`          | ✅ Yes  | ❌ No   | ✅ Yes     | ✅ Yes    | Fixed collection of ordered items |
| **Set**        | `my_set = {1, 2, 3}`            | ❌ No   | ✅ Yes  | ❌ No      | ❌ No     | Unique elements, fast membership test |
| **Dictionary** | `my_dict = {"key": "value"}`    | ✅ Yes* | ✅ Yes  | ❌ No (keys) | ✅ Yes (by key) | Key-value mapping |
| **String**     | `my_str = "hello"`              | ✅ Yes  | ❌ No   | ✅ Yes     | ✅ Yes    | Text and character manipulation |

> *Dictionaries preserve insertion order from Python 3.7+

---

## 🔧 Common Methods

### 📋 List
```python
fruits = ['apple', 'banana']
fruits.append('cherry')
fruits.remove('banana')
fruits.sort()
len(fruits)
```

### 🔁 List Iteration
```python
for fruit in fruits:
    print(fruit)
```

---

### 📦 Tuple
```python
point = (3, 4)
len(point)
point.count(3)
point.index(4)
```

### 🔁 Tuple Iteration
```python
for value in point:
    print(value)
```

---

### 🧺 Set
```python
numbers = {1, 2, 3}
numbers.add(4)
numbers.remove(2)
numbers.update([5, 6])
numbers.discard(10)  # No error if 10 not found
```

### 🔁 Set Iteration
```python
for num in numbers:
    print(num)
```

---

### 🗃️ Dictionary
```python
person = {"name": "Asmaa", "age": 29}
person["city"] = "Rabat"
person.get("name")
person.pop("age")
person.keys()
person.values()
person.items()
```

### 🔁 Dictionary Iteration
```python
for key, value in person.items():
    print(f"{key} => {value}")
```

---

### 🔤 String
```python
text = "Hello"
text.upper()
text.lower()
text.replace("H", "J")
text.split("e")
```

### 🔁 String Iteration
```python
for char in text:
    print(char)
```

---

## ✅ Summary

- Use **list** when order and changeability matter.
- Use **tuple** for fixed sequences.
- Use **set** for uniqueness and fast membership.
- Use **dictionary** to map keys to values.
- Use **string** to handle text and characters.
