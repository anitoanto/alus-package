from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import upload_videos, ml_out, download_files
from fastapi.staticfiles import StaticFiles
from .utils import *

app = FastAPI()

make_local_dirs("uploads")
make_local_dirs("summarized")
make_local_dirs("summarized/uploads")
make_local_dirs("static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router=upload_videos.router)
app.include_router(router=ml_out.router)
app.include_router(router=download_files.router)

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", tags=["root"])
async def read_root():
    return {"message": "Welcome to ALUS backend API"}
