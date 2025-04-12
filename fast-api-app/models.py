from pydantic import BaseModel
from typing import List, Optional

from pydantic import BaseModel
from typing import Optional, Dict

class Student(BaseModel):
    full_name: str
    class_name: str
    teacher: str
    contacts: Optional[Dict] = None  # можно заменить на Optional[str], если будет просто строка

class Project(BaseModel):
    id: int
    name: str
    description: str
    author_id: int
    likes: int = 0
    reviews: dict
    views: int = 0
    wishes: List[str] = []
