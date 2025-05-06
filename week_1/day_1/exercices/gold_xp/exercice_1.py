month = int(input("Please, choose a month (1 to 12): "))
season = "The season of the month received is :"
match month :
    case _ if 3 <= month <= 5:
        season += "Spring"
    case _ if 6 <= month <= 8:
        season += "Summer"
    case _ if 9 <= month <= 11:
        season += "Autumn"
    case _ if month <= 2 or month == 12:
        season += "Winter"
    case _:
        season = "Please, add a valid number => between 1 and 12"
print(season)