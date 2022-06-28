from fastapi import APIRouter, File, UploadFile
from typing import List
from ..utils import make_local_dirs
import random
import string
import os


router = APIRouter()


@router.post("/upload/videos", tags=["upload"])
async def upload_videos(files: List[UploadFile]):
    uniq_id = "".join(
        random.choice(string.ascii_uppercase + string.ascii_lowercase)
        for _ in range(10)
    )
    save_path = f"uploads/{uniq_id}/"
    make_local_dirs(dir_path=save_path)
    count = 0
    for file in files:
        with open(save_path + file.filename, "wb") as f:
            count += 1
            f.write(file.file.read())
    return ["success", uniq_id, count]
