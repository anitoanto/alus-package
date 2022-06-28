# Automatic Lung Ultrasound Package

A cloud-based software tool for automated lung ultrasound analysis.

This package performs:

- Video Summarization
- Classification
- Segmentation
- Object Tagging

Web UI is provided for easy intuitive viewing experience for clinicians.

# Locally run this project

- Install Python 3.9 (https://www.python.org/)
- Install Node LTS version (https://nodejs.org/en/)
- Clone this repository

```
git clone https://github.com/anitoanto/alus-package.git
```

- Start frontend and backend in separate terminal sessions.
- Run the following to start the frontend.

```
cd alus-frontend
npm install
npm start
```

- Run the following to start the backend.
  (in separate terminal)

```
cd alus-backend
python -m venv alus-venv
.\alus-venv\Scripts\activate
pip3 install wheel setuptools
pip3 install -r requirements.txt
python main.py
```

- Web application shall be available at http://localhost:3000/
- Click on get started to enter the web application.
- You can upload video from sample-videos directory.

# Note
- You may have to change the method of activating python venv if you are running project on linux.
- You may have to change the path of python executable binary in `alus-backend\server\routers\ml_out.py` when calling subprocess.