import React from "react";

function DisplayViewer({ onChange, onClick, value }) {
  return (
    <div className="search-view">
      <div className="flex input-controls">
        <input
          type="text"
          name="searchUrl"
          id="searchUrl"
          onChange={onChange}
          value={value}
        />
        <button className="btn-search" onClick={onClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default DisplayViewer;
