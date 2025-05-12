# Function to display the board
def display_board(board):
    print()
    print("-------------")
    for row in board:
        print("|", end=" ")
        print(" | ".join(row), end=" |\n")
        print("-------------")
    print()

# Function to get player input
def player_input(player, board):
    while True:
        try:
            pos = int(input(f"Player {player}, choose your position (1-9): "))
            if pos < 1 or pos > 9:
                print("Invalid input. Please choose a number between 1 and 9.")
                continue

            row = (pos - 1) // 3
            col = (pos - 1) % 3
            if board[row][col] == " ":
                board[row][col] = player
                break
            else:
                print("That position is already taken. Try another.")
        except ValueError:
            print("Invalid input. Please enter a number.")

# Function to check for a win
def check_win(board, player):
    # Check rows
    for row in board:
        if all([cell == player for cell in row]):
            return True
    # Check columns
    for col in range(3):
        if all([board[row][col] == player for row in range(3)]):
            return True
    # Check diagonals
    if all([board[i][i] == player for i in range(3)]) or all([board[i][2-i] == player for i in range(3)]):
        return True
    return False

# Function to check for a tie
def check_tie(board):
    return all([cell != " " for row in board for cell in row])

# Main function to play the game
def play():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"
    
    while True:
        display_board(board)
        player_input(current_player, board)

        if check_win(board, current_player):
            display_board(board)
            print(f"Congratulations! Player {current_player} wins!")
            break

        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break

        current_player = "O" if current_player == "X" else "X"

# Start the game
play()
