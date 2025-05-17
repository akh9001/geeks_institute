from fastapi import APIRouter, HTTPException
from schemas import UserCreate, TaskCreate, TaskRead, UserRead
from task_api import models
from typing import List

router = APIRouter()
# API Endpoints
@router.get("/")
def read_root():
    return {"message": "User CRUD API with direct psycopg2 connection"}

@router.post("/users/")
def create_user(user: UserCreate):
    return models.create_user(user)

@router.post("/tasks/")
def create_task(task: TaskCreate):
    return models.create_task(task.title, task.description, task.user_id)

@router.get("/users/", response_model=List[UserRead])
def get_users():
    return models.get_all_users()
@router.get("/tasks/", response_model=List[TaskRead])
def get_tasks():
    return models.get_all_tasks()

@router.delete("/tasks/{task_id}")
def delete(task_id: int):
    deleted = models.delete_task(task_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"message": "Task deleted"}
