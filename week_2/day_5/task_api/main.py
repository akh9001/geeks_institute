import os
import logging
from dotenv import load_dotenv  # Environment variable management
from routes import router
from database import get_connection


# Configure logging - helps with debugging and monitoring
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI application
app = FastAPI(title="User CRUD API with Psycopg2")
# Create tables when application starts
@app.on_event("startup")
async def startup_db_client():
    """Initialize database on application startup
    
    Checks if the users table exists and creates it if needed.
    This runs once when the FastAPI application starts.
    """
    try:
        with get_connection() as conn:
            with conn.cursor() as cur:
                # Check if table exists in the database
                cur.execute("SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'users')")
                table_exists = cur.fetchone()[0]
                
                if not table_exists:
                    # Create the users table with proper constraints
                    cur.execute("""
                        CREATE TABLE users (
                            id SERIAL PRIMARY KEY,  -- Auto-incrementing primary key
                            user_name VARCHAR(100) UNIQUE NOT NULL,  -- Must be unique
                            first_name VARCHAR(100) NOT NULL,
                            last_name VARCHAR(100) NOT NULL
                            email VARCHAR(150) UNIQUE NOT NULL,  -- Must be unique
                        )
                    """)
                    conn.commit()
                    logger.info("Table 'users' created successfully")
                else:
                    logger.info("Table 'users' already exists")
                # Check if table exists in the database
                cur.execute("SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'tasks')")
                table_exists = cur.fetchone()[0]
                
                if not table_exists:
                    # Create the users table with proper constraints
                    cur.execute("""
                        CREATE TABLE tasks (
							id SERIAL PRIMARY KEY,
							title TEXT NOT NULL,
							description TEXT,
							user_id INTEGER REFERENCES users(id)
						)
                    """)
                    conn.commit()
                    logger.info("Table 'tasks' created successfully")
                else:
                    logger.info("Table 'tasks' already exists")
        logger.info("Database initialization complete")
    except Exception as e:
        logger.error(f"Error initializing database: {e}")
        raise

app.include_router(router)

# Entry point for running the application directly
if __name__ == "__main__":
    import uvicorn
    # Run the FastAPI application using Uvicorn server
    # - "psycopg2_api:app" refers to the app variable in this file
    # - reload=True enables auto-reload on code changes (development)
    uvicorn.run("psycopg2_api:app", host=os.getenv("HOST", "localhost"), port=int(os.getenv("PORT", "8999")), reload=True) 
