from pydantic import BaseModel
from typing import List, Optional

class Student(BaseModel):
    id: int
    full_name: str
    class_name: str
    teacher: str
    contacts: dict

class Project(BaseModel):
    id: int
    name: str
    description: str
    author_id: int
    likes: int = 0
    reviews: dict
    views: int = 0
    wishes: List[str] = []
