import random

def get_random_temp(season):
    if season == "winter":
        return random.uniform(-10, 16)
    elif season == "spring":
        return random.uniform(16, 23)
    elif season == "summer":
        return random.uniform(24, 40)
    elif season == "autumn":
        return random.uniform(16, 24)
    else:
        return random.uniform(-10, 40)

def main():
    season = input("Enter a season (winter, spring, summer, autumn): ").lower()
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp:.1f} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 16 <= temp < 23:
        print("Cool and comfy.")
    elif 24 <= temp < 32:
        print("Nice and warm!")
    elif temp >= 32:
        print("It's hot! Stay hydrated.")

main()
