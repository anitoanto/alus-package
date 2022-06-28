import React from "react";
import "./StageHighlighter.css";

function StageHighlighter(props) {
  return (
    <div className="top-section">
      <div>
        <div className="alus-title">ALUS</div>
      </div>
      <div className="stage-container">
        <div className="stage-item">
          <div className="selection-graphics"> </div>
          <div className="selection-name">
            Classification {"&"} Segmentation
          </div>
        </div>
        <div className="stage-item">
          <div className="selection-graphics"> </div>
          <div className="selection-name">Object Tagging</div>
        </div>
        {/* <div className="stage-item">
          <div className="selection-graphics"> </div>
          <div className="selection-name">
            Final Report
            <br />
            {"  "} <br />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default StageHighlighter;
