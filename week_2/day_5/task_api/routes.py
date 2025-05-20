from fastapi import APIRouter, HTTPException
from schemas import UserCreate, TaskCreate, TaskRead, UserRead
from typing import List
from models import get_all_tasks,create_task,create_user,get_all_users,delete_task


router = APIRouter()
# API Endpoints
@router.get("/")
def read_root():
    return {"message": "User CRUD API with direct psycopg2 connection"}

@router.post("/users/")
def create_user(user: UserCreate):
    return create_user(user)

@router.post("/tasks/")
def create_task(task: TaskCreate):
    return create_task(task.title, task.description, task.user_id)

@router.get("/users/", response_model=List[UserRead])
def get_users():
    return get_all_users()
@router.get("/tasks/", response_model=List[TaskRead])
def get_tasks():
    return get_all_tasks()

@router.delete("/tasks/{task_id}")	
def delete(task_id: int):
    deleted = delete_task(task_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"message": "Task deleted"}
