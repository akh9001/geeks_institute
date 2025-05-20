import os
import logging
from dotenv import load_dotenv  # Environment variable management
import routes
from database import get_connection
from fastapi import FastAPI


# Configure logging - helps with debugging and monitoring
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI application
app = FastAPI(title="User CRUD API with Psycopg2")

app.include_router(routes.router)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8091, reload=True)
