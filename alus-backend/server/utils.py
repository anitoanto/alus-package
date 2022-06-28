import os

def make_local_dirs(dir_path):
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)
