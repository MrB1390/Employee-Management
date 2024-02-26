import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="loading-container d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
