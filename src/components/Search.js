import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [searchUrlFirstFrame, setSearchUrlFirstFrame] = useState("");
  const [searchUrlSecondFrame, setSearchUrlSecondFrame] = useState("");
  const searchHandlerForFirstFrame = () => {
    let url = searchUrlFirstFrame;
    window.open(url, "myFrame");
  };

  const searchHandlerForSecondFrame = () => {
    let url = searchUrlSecondFrame;
    window.open(url, "myFrame2");
  };
  return (
    <div>
      <div className="display-frame">
        <input
          type="text"
          name="searchUrl"
          id="searchUrl"
          onChange={(e) => setSearchUrlFirstFrame(e.target.value)}
          value={searchUrlFirstFrame}
        />
        <button onClick={searchHandlerForFirstFrame}>Search</button>
        <iframe
          id="fr"
          name="myFrame"
          width="300"
          height="300"
          src="about:blank"
          allow=""
          title="name"
        ></iframe>
      </div>
      <div className="display-frame">
        <input
          type="text"
          name="searchUrl"
          id="searchUrl"
          onChange={(e) => setSearchUrlSecondFrame(e.target.value)}
          value={searchUrlSecondFrame}
        />
        <button onClick={searchHandlerForSecondFrame}>Search</button>
        <iframe
          id="fr"
          name="myFrame2"
          width="300"
          height="300"
          src="about:blank"
          allow=""
          title="name"
        ></iframe>
      </div>
    </div>
  );
}

export default Search;
