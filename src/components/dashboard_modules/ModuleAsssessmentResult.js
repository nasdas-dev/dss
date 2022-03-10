import React from "react";

function ModuleAsssessmentResult() {
  return (
    <div class="card transition ease-in-out duration-1000 focus: hover:scale-105 lg:card-side bg-base-200 shadow-xl max-w-3xl m-12">
      <div
        className="radial-progress m-10 animate__animated animate__zoomIn border-l-deep-purple-accent-700 text-success shadow-xl"
        style={{
          "--value": "80",
          "--size": "12rem",
          "--thickness": "2rem",
        }}
      >
        <div className="text-2xl font-black">80</div>
      </div>{" "}
      <div class="card-body">
        <h2 class="card-title">
          Your ransomware protection score <br /> has been determined.
        </h2>
        <p>
          Click the button to compare your results with other users <br /> and
          receive helpful tips to improve your security.
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">My results</button>
        </div>
      </div>
    </div>
  );
}

export default ModuleAsssessmentResult;
