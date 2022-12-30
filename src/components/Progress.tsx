import React from "react";

function Progress() {
  return (
    <div>
      <progress
        className="progress progress-primary w-56"
        value="0"
        max="100"
      ></progress>
      <progress
        className="progress progress-primary w-56"
        value="10"
        max="100"
      ></progress>
      <progress
        className="progress progress-primary w-56"
        value="40"
        max="100"
      ></progress>
      <progress
        className="progress progress-primary w-56"
        value="70"
        max="100"
      ></progress>
      <progress
        className="progress progress-primary w-56"
        value="100"
        max="100"
      ></progress>
    </div>
  );
}

export default Progress;
