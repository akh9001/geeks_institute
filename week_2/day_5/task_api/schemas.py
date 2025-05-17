from pydantic import BaseModel

class UserBase(BaseModel):
    """Base User model with common attributes"""
    user_name: str
    first_name: str
    last_name: str
    email: str

class UserCreate(UserBase):
    """Model for creating a new user (inherits from UserBase)"""
    pass
class User(UserBase):
    """Model for user responses, includes ID field"""
    id: int  # Database-assigned ID

class TaskCreate(BaseModel):
    title: str
    description: str
    user_id: int

class UserRead(BaseModel):
    id: int
    user_name: str
    first_name: str
    last_name: str
    email: str
    
class TaskRead(BaseModel):
    id: int
    title: str
    description: str
    user_id: int
    username: str
