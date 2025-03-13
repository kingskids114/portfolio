from fastapi import APIRouter
from database import load_data, save_data
from models import Project

router = APIRouter()

@router.get("/projects")
def get_projects():
    return load_data("projects")

@router.post("/projects/{project_id}/wish")
def add_wish(project_id: int, message: str):
    projects = load_data("projects")
    for project in projects:
        if project["id"] == project_id:
            project["wishes"].append(message)
            save_data(pd.DataFrame(projects), "projects")
            return {"message": "Пожелание добавлено", "wishes": project["wishes"]}
    return {"error": "Проект не найден"}

