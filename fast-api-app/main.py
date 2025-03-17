from fastapi import FastAPI, File, UploadFile
import shutil
import os
from api import routes

app = FastAPI()

app.include_router(routes.router)

UPLOAD_DIR = "uploads"

# Создаем папку для загруженных файлов, если её нет
os.makedirs(UPLOAD_DIR, exist_ok=True)


@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    # Сохраняем файл на сервер
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Возвращаем URL, по которому можно открыть проект
    return {"url": f"/view/{file.filename}"}


@app.get("/view/{filename}")
async def view_project(filename: str):
    return {
        "forkphorus_url": f"https://forkphorus.github.io/#{UPLOAD_DIR}/{filename}"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
