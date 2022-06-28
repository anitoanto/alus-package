from fastapi import APIRouter, File, UploadFile
from typing import List
from ..utils import make_local_dirs
import random
import string
import os
import cv2
import subprocess
import sys

router = APIRouter()


def get_random_frames(video_path, uniq_id, video_name):
    frames = []
    video = cv2.VideoCapture(video_path)
    save_location = f"static/{uniq_id}/frames/{video_name}/"
    make_local_dirs(dir_path=save_location)

    for i in range(8):
        video.set(1, random.randint(1, video.get(cv2.CAP_PROP_FRAME_COUNT) - 1))
        success, f = video.read()
        if success:
            frame_filename = save_location + f"frame_{i}.jpg"
            cv2.imwrite("./" + frame_filename, f)
            frames.append("http://localhost:9000/" + frame_filename)
    return frames


@router.post("/request/ml_out", tags=["request"])
async def request_ml_out(uniq_id: str):
    videos_path = f"uploads/{uniq_id}/"
    result_path = f"static/{uniq_id}"
    make_local_dirs(result_path)
    cmd = subprocess.run(
        ["./alus-venv/Scripts/python.exe", "ml.py", videos_path, result_path],
        stdout=sys.stdout,
    )

    videos_path_summarized = f"summarized/uploads/{uniq_id}/"

    cmd2 = subprocess.run(
        [
            "./alus-venv/Scripts/python.exe",
            "yolo_detect.py",
            "--source",
            videos_path_summarized,
            "--project",
            "static",
            "--name",
            uniq_id,
            "--exist-ok",
        ],
        stdout=sys.stdout,
    )

    files = os.listdir(f"./static/{uniq_id}")
    if files.__contains__("frames"):
        files.remove("frames")

    urls = []
    for filename in files:
        frames = get_random_frames(f"./static/{uniq_id}/{filename}", uniq_id, filename)
        if "normal" in filename:
            continue
        temp = [f"http://localhost:9000/static/{uniq_id}/{filename}", frames]
        urls.append(temp)

    return urls


@router.post("/request/random", tags=["request"])
def request_random(uniq_id: str, video_file_name: str):
    random_string = "".join(random.choices(string.ascii_uppercase + string.digits, k=8))
    img_set = []

    sep = video_file_name.split(".")
    # print(sep)
    files = [
        sep[0] + "." + sep[1] + ".webm",
        sep[0] + "." + sep[1] + ".normal.webm",
        sep[0] + "." + sep[1] + ".normal_objTag.webm",
    ]
    
    chosen_frames = []
    # print(files)
    video = cv2.VideoCapture(f"./static/{uniq_id}/{files[0]}")
    for i in range(8):
        r = random.randint(1, video.get(cv2.CAP_PROP_FRAME_COUNT) - 1)
        chosen_frames.append(r)

    for filename in files:
        frames = []
        video = cv2.VideoCapture(f"./static/{uniq_id}/{filename}")

        save_location = f"static/{uniq_id}/frames/{random_string}/{filename}/"
        make_local_dirs(dir_path=save_location)

        for i in range(8):
            video.set(1, chosen_frames[i])
            success, f = video.read()
            if success:
                frame_filename = save_location + f"frame_{i}.jpg"
                cv2.imwrite("./" + frame_filename, f)
                frames.append("http://localhost:9000/" + frame_filename)

        img_set.append(frames)

    return img_set
