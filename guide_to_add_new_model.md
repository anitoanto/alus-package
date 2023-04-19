# Guide to add new model.

### Notes

- The `alus-backend` folder contains all the backend code for all ML model inferencing and FastAPI server API endpoints.
- The `alus-frontend` folder contains frontend web application to interact with deployed ML models.
- The ML inferencing process is decoupled from the FastAPI server API endpoint implementation.
- To obtain ML results, videos are uploaded to the `/upload/videos` API endpoint, and results from the ML model are requested through the `/request/ml_out` API endpoint (referring code `alus-backend/server/routers/upload_videos.py` and `alus-backend/server/routers/ml_out.py`).
- Here, our trained model is exposed via cli parameters (written in `alus-backend/yolo_detect.py`) to provide input data path and other variables to produce results.

# Instructions to integrate new model.

- Step 1: To integrate a new model, add the weights required for inference from the model to the `alus-backend/modelWeights/` directory in a new folder.
- Step 2: Write a python script containing code for producing results from the new model, and expose cli options to pass data input folder and other parameters required. (Refer `alus-backend/yolo_detect.py` for the sample). Save the file in `alus-backend` folder.
- Note: Your script should place the results in `alus-backend/static/<random_id>` folder.
- Step 3: Edit `alus-backend/server/routers/ml_out.py` to have call to your cli interface written on previous step. Add a call to your script in the function mentioned below.
- (snippet from `alus-backend/server/routers/ml_out.py`)

```python
@router.post("/request/ml_out", tags=["request"])
async def request_ml_out(uniq_id: str):
    ...
```

- Step 4: Modify the returned results from this function to incorporate your results filenames and paths.
- Step 5: If the filenames are changed, you should also change those in frontend code, inside `Box` React component written in `alus-frontend/src/components/Result/Box.js`.
- Step 5: If required you can add extra checkbox to toggle visibility for your model results by adding new checkbox code in `alus-frontend/src/components/Result/Box.js`.

If you have any questions or issues related to integrating a new model, please raise an issue.
