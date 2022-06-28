import Box from "./Box";
import React from "react";
import "./Result.css";
import StageHighlighter from "../../components/StageHighlighter";
import { downloadZip } from "../../handlers/downloadHandler";

import { useState, useRef, useEffect } from "react";
import Loading from "../../pages/upload/Loading";

function Result(props) {
  // console.log(props.results);

  const [isZip, setIsZip] = useState(false);

  const handleDownloadClick = async () => {
    setIsZip(true);
    let url = await downloadZip(props.uid);
    console.log(url);
    window.open(url["url"], "_self");
    setIsZip(false);
  };
  return (
    <div>
      <div className="download-container">
        {isZip ? (
          <Loading />
        ) : (
          <div onClick={handleDownloadClick} className="download-btn">
            Download all
          </div>
        )}
      </div>
      <div>
        {props.results.map((item, index) => {
          return <Box key={index} src={item[0]} images={item[1]} />;
        })}
      </div>
    </div>
  );
}
export default Result;
