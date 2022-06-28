import "./Box.css";
import { useState, useCallback, useEffect, useRef } from "react";
import RcViewer from "@hanyk/rc-viewer";
import Loading from "../../pages/upload/Loading";
import { getRandomImg } from "../../handlers/getRandomHandler";

function Box(props) {
  const segRef = useRef();
  const objTagRef = useRef();
  const [isRandomLoading, setIsRandomLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(props.src);
  const [imgUrls, setImgUrls] = useState(props.images);
  const [imgUrlSet, setImgUrlSet] = useState([]);

  useEffect(() => {
    segRef.current.checked = true;
    objTagRef.current.checked = false;
    handleGetRandomClick();

    let segImgUrls = props.images;
    let normalImgUrls = props.images.map((item) => {
      let temp = item.split(".");
      let newUrl =
        temp[0] + "." + temp[1] + ".normal." + temp[2] + "." + temp[3];

      return newUrl;
    });
    let objTagImgUrls = props.images.map((item) => {
      let temp = item.split(".");
      let newUrl =
        temp[0] + "." + temp[1] + ".normal_objTag." + temp[2] + "." + temp[3];

      return newUrl;
    });
    setImgUrlSet([segImgUrls, normalImgUrls, objTagImgUrls]);
  }, []);

  useEffect(() => {
    if (imgUrlSet.length > 0) {
      if (segRef.current.checked) {
        setImgUrls(imgUrlSet[0]);
      }
      if (objTagRef.current.checked) {
        setImgUrls(imgUrlSet[2]);
      }
      if (
        segRef.current.checked == false &&
        objTagRef.current.checked == false
      ) {
        setImgUrls(imgUrlSet[1]);
      }
    }
  }, [imgUrlSet]);

  function showNormal() {
    let tempUrl = props.src;
    tempUrl = tempUrl.substring(0, tempUrl.length - 5);
    setVideoUrl(tempUrl + ".normal.webm");
    setImgUrls(imgUrlSet[1]);
  }

  const handleSegClick = () => {
    objTagRef.current.checked = false;
    if (segRef.current.checked) {
      setVideoUrl(props.src);
      setImgUrls(imgUrlSet[0]);
    } else {
      showNormal();
    }
  };

  const handleObjTagClick = () => {
    segRef.current.checked = false;
    if (objTagRef.current.checked) {
      let tempUrl = props.src;
      tempUrl = tempUrl.substring(0, tempUrl.length - 5);
      setVideoUrl(tempUrl + ".normal_objTag.webm");
      setImgUrls(imgUrlSet[2]);
    } else {
      showNormal();
    }
  };

  const handleGetRandomClick = async () => {
    setIsRandomLoading(true);
    let v = videoUrl.split("/");
    let result = await getRandomImg(v[4], v[5]);
    console.log(result);
    setImgUrlSet(result);
    setIsRandomLoading(false);
  };

  function getVideoName(filename) {
    let a = filename.split("/");
    let f = a[a.length - 1];
    return f.split(".")[0];
  }

  return (
    <div className="box-section">
      <div className="img-video">
        <div className="container">
          <div className="vname">{getVideoName(videoUrl)}</div>
          <br />
          <div>
            <video
              src={videoUrl}
              autoPlay
              muted
              width="540"
              //  height="480"
              controls
              className="video-prop"
              type="video/mp4"
            ></video>
          </div>
          <div className="check-type">
            <div className="seg-text">
              <input
                type="checkbox"
                className="check"
                onChange={handleSegClick}
                ref={segRef}
              />
              <label> Segmentation</label>
            </div>

            <div className="seg-text">
              <input
                type="checkbox"
                className="check"
                onChange={handleObjTagClick}
                ref={objTagRef}
              />
              <label> Object Tagging</label>
            </div>
          </div>
        </div>
      </div>

      <div className="img-next-container">
        <RcViewer>
          <ul id="images" className="imgs">
            {imgUrls.map((item, index) => {
              return (
                <span key={index}>
                  <img src={item} alt="result" className="img-prop" />
                </span>
              );
            })}
          </ul>
        </RcViewer>
        <div className="next-btn-container">
          {isRandomLoading ? (
            <Loading />
          ) : (
            <div className="next-btn-text" onClick={handleGetRandomClick}>
              🡢
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Box;
