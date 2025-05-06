# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print("Basket list : ", basket)

# Remove Banana from the list.
basket.remove("Banana")
print("\n Basket list after removing Banana: ", basket)

# Remove Blueberries from the list.
basket.remove("Blueberries")
print("\n Basket list after removing Blueberries: ", basket)

# Add Kiwi to the end of the list.
basket.append("Kiwi")
print("\n Basket list after adding Kiwi to end : ", basket)
# Add Apples to the beginning of the list.
basket = ["Apples", *basket]
print("\n Basket list after adding Apples to beginning : ", basket)
# Count how many apples are in the basket.
print(f"\n Basket list has : {len(basket)} elts" )

# Empty the basket.
basket.clear()

# Print(basket)
print(f"\n Basket has been cleared: {basket} ")
