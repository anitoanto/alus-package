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

# Guide to add new model.

Here is the step by step guide to integrate new model. Please refer: https://github.com/anitoanto/alus-package/blob/main/guide_to_add_new_model.md

<hr>

##### Code Available under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) (see https://creativecommons.org/licenses/by-nc-nd/4.0/)

##### Please see the articles mentioned in Academic references and Acknowledgements that are to be cited for any usage of the code and/or data.

#### ACADEMIC REFERENCES TO BE CITED:
1. Anto, Anito, Linda Rose Jimson, Tanya Rose, Mohammed Jafrin, and Mahesh Raveendranatha Panicker. "SPAALUV: Software Package for Automated Analysis of Lung Ultrasound Videos." SoftwareX 23 (2023): 101460. https://doi.org/10.1016/j.softx.2023.101460
   
3. Jinu Joseph, Mahesh Raveendranatha Panicker, Yale Tung Chen, Kesavadas Chandrasekharan, Vimal Chacko Mondy, Anoop Ayyappan, Jineesh Valakkada and Kiran Vishnu Narayan, “lungEcho - Resource Constrained Lung Ultrasound Video Analysis Tool for Faster Triaging and Active Learning”, Elsevier Biomedical Engineering Advances, vol 6 (100094), Nov 2023. https://doi.org/10.1016/j.bea.2023.100094 

4. Mathews, Roshan P., Mahesh Raveendranatha Panicker, Abhilash R. Hareendranathan, Yale Tung Chen, Jacob L. Jaremko, Brian Buchanan, Kiran Vishnu Narayan, Chandrasekharan Kesavadas, and Greeta Mathews. "Unsupervised multi-latent space RL framework for video summarization in ultrasound imaging." IEEE Journal of Biomedical and Health Informatics 27, no. 1 (2022): 227-238. https://doi.org/10.1109/JBHI.2022.3208779 

5. Refer to http://www.pulseecho.in/alus/covecho/ for more details

#### Acknowledgements:

1. Yolov5, 4.0 release https://github.com/ultralytics/yolov5
2. Tzutalin. LabelImg. Git code (2015). https://github.com/tzutalin/labelImg
