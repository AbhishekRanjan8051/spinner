import React from "react";
import "./spinner.css";
const Spinner = () => {
  return (
    <>
      {/* <h2>spinner</h2>
      <img
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
        alt=""
      /> */}
      <div class="spinner">
        <div class="spinner-text">Loading...</div>
        <div class="spinner-sector spinner-sector-red"></div>
        <div class="spinner-sector spinner-sector-blue"></div>
        <div class="spinner-sector spinner-sector-green"></div>
      </div>
    </>
  );
};

export default Spinner;
