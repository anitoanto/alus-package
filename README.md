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

##### Code Available under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) (see https://creativecommons.org/licenses/by-nc-nd/4.0/)

##### Please see the articles mentioned in Academic references and Acknowledgements that are to be cited for any usage of the code and/or data.

#### ACADEMIC REFERENCES TO BE CITED:
1. Anito Anto, Linda Rose Jimson, Tanya Rose, Mohammed Jafrin, Mahesh Raveendranatha Panicker, “SPAALUV: Software Package for Automated Analysis of Lung Ultrasound Videos,” (Under Review) arXiv link: https://arxiv.org/abs/2208.00620 

2. Jinu Joseph, Mahesh Raveendranatha Panicker, Yale Tung Chen, Kesavadas Chandrasekharan, Vimal Chacko Mondy, Anoop Ayyappan, Jineesh Valakkada and Kiran Vishnu Narayan, “covEcho-Resource Constrained Lung Ultrasound Video Analysis Tool for Faster Triaging and Active Learning”, (Under Review). arXiv link: https://arxiv.org/abs/2206.10183 

3. Roshan P Mathews, Mahesh Raveendranatha Panicker, Abhilash R Hareendranathan, Yale Tung Chen, Jacob L Jaremko, Brian Buchanan, Kiran Vishnu Narayan, Kesavadas C, Greeta Mathews, “Unsupervised multi-latent space reinforcement learning framework for video summarization in ultrasound imaging”, accepted in IEEE Journal of Biomedical and Health Informatics. https://doi.org/10.1109/JBHI.2022.3208779

4. Refer to http://www.pulseecho.in/alus/covecho/ for more details

#### Acknowledgements:

1. Yolov5, 4.0 release https://github.com/ultralytics/yolov5
2. Tzutalin. LabelImg. Git code (2015). https://github.com/tzutalin/labelImg
