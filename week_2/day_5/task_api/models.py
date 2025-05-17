from schemas import UserCreate
from database import get_connection

def create_user(new_user: UserCreate):
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute("INSERT INTO users (user_name, first_name, last_name, email) VALUES (%s) RETURNING *", (new_user.user_name, new_user.first_name, new_user.last_name, new_user.email))
        result = cur.fetchone()
        conn.commit()
    conn.close()
    return result

def create_task(title: str, description: str, user_id: int):
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute(
            "INSERT INTO tasks (title, description, user_id) VALUES (%s, %s, %s) RETURNING *",
            (title, description, user_id)
        )
        result = cur.fetchone()
        conn.commit()
    conn.close()
    return result

def get_all_users():
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute("""
            SELECT *
            FROM users
        """)
        result = cur.fetchall()
    conn.close()
    return result

def get_all_tasks():
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute("""
            SELECT tasks.*, users.username
            FROM tasks
            JOIN users ON tasks.user_id = users.id
        """)
        result = cur.fetchall()
    conn.close()
    return result

def delete_task(task_id: int):
    conn = get_connection()
    with conn.cursor() as cur:
        cur.execute("DELETE FROM tasks WHERE id = %s RETURNING *", (task_id,))
        result = cur.fetchone()
        conn.commit()
    conn.close()
    return result
