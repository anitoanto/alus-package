import "./Upload.css";
import { Link } from "react-router-dom";
import FootImage from "./foot.png";
import Loading from "./Loading.js";
import { uploadToServer } from "../../handlers/uploadHandler.js";
import { get_ml_out } from "../../handlers/videoProcessHandler.js";

import { useState, useRef, useEffect } from "react";
import StageHighlighter from "../../components/StageHighlighter";
import Box from "../../components/Result/Box";
import Result from "../../components/Result/Result";

function Upload() {
  const uploadRef = useRef();
  const loadingRef = useRef();
  const [id, setId] = useState("");
  const [processingState, setProcessingState] = useState(false);
  const [isUploadBtnEnabled, setisUploadBtnEnabled] = useState(true);
  const [statusText, setStatusText] = useState(
    "Select files from your computer"
  );
  const [results, setResults] = useState([]);
  const [resultReady, setresultReady] = useState(false);

  const handleUploadClick = () => {
    uploadRef.current.click();
  };

  const handleNextClick = async () => {
    if (id != "") {
      setProcessingState(true);
      setStatusText("Processing videos. Please wait...");
      loadingRef.current.style.display = "block";
      let res = await get_ml_out(id);
      setResults(res);
    }
  };

  useEffect(() => {
    if (results.length > 0) {
      setresultReady(true);
    }
  }, [results]);

  const handleUploadChange = async () => {
    setisUploadBtnEnabled(false);
    let uploadFiles = uploadRef.current.files;
    setStatusText("Uploading in progress...");

    let [id, count] = await uploadToServer(uploadFiles);
    setId(id);
    setStatusText("Uploaded " + count + " files");
    loadingRef.current.style.display = "none";
  };

  return (
    <div>
      <StageHighlighter selection={"none"} />
      <br />
      {resultReady ? (
        <Result results={results} uid={id} />
      ) : (
        <div className="upload-body">
          <div className="center-body">
            {isUploadBtnEnabled ? (
              <img
                className="cloud"
                src="./ant-design_cloud-upload-outlined.png"
              ></img>
            ) : (
              <div ref={loadingRef}>
                <Loading />
              </div>
            )}
          </div>
          <div className="upload-sec">
            <input
              type="file"
              multiple
              className="hiddenInp"
              ref={uploadRef}
              onChange={handleUploadChange}
            />
            {isUploadBtnEnabled ? (
              <button className="upload-btn" onClick={handleUploadClick}>
                <span className="btn-content">Upload Videos</span>
              </button>
            ) : (
              <div></div>
            )}
          </div>
          <div className="select-text">{statusText}</div>
        </div>
      )}

      {/* <Box src={"http://localhost:9000/"} images={[]}/> */}

      <div className="foot">
        {!processingState ? (
          <div className="btn-container">
            <div className="next-btn" onClick={handleNextClick}>
              NEXT →
            </div>
          </div>
        ) : (
          <div className="btn-placeholder"></div>
        )}
        <img className="footPic" src={FootImage} />
      </div>
    </div>
  );
}
export default Upload;
