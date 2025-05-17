import os
import psycopg2
from psycopg2.extras import RealDictCursor

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:yourpassword@localhost:5432/tasks_db")

def get_connection():
    return psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)
# The second argument, cursor_factory=RealDictCursor, tells psycopg2 to return query results as dictionaries instead of tuples.
