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
    <div className="container">
      <div className="grid">
        <div className="search-view">
          <div className="flex input-controls">
            <input
              type="text"
              name="searchUrl"
              id="searchUrl"
              onChange={(e) => setSearchUrlFirstFrame(e.target.value)}
              value={searchUrlFirstFrame}
            />
            <button className="btn-search" onClick={searchHandlerForFirstFrame}>
              Search
            </button>
          </div>
          <iframe
            id="fr"
            name="myFrame"
            allow=""
            title="name"
            className="content-viewer"
          ></iframe>
        </div>
        <div className="search-view">
          <div className="flex input-controls">
            <input
              type="text"
              name="searchUrl"
              id="searchUrl"
              onChange={(e) => setSearchUrlSecondFrame(e.target.value)}
              value={searchUrlSecondFrame}
            />
            <button
              className="btn-search"
              onClick={searchHandlerForSecondFrame}
            >
              Search
            </button>
          </div>
          <iframe
            id="fr"
            name="myFrame2"
            allow=""
            title="name"
            className="content-viewer"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Search;
