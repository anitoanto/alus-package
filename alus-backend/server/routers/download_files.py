from fastapi import APIRouter
from ..utils import make_local_dirs
import shutil

router = APIRouter()


@router.post("/download/zip", tags=["download"])
async def download_files(uniq_id: str):
    folder_name = f"./static/{uniq_id}"
    make_local_dirs("./static/zip")
    save_location = f"./static/zip/{uniq_id}"
    shutil.make_archive(save_location, "zip", folder_name)
    return {"url": f"http://localhost:9000/static/zip/{uniq_id}.zip"}
