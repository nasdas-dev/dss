import React, { useDebugValue, useEffect, useState } from "react";
import DataService from "../../services/DataService";

function ModuleAsssessmentResult() {
  const [score, setScore] = useState(-1);
  const realScore = localStorage.getItem("ass")
    ? parseInt(localStorage.getItem("ass"))
    : 0;

  useEffect(() => {
    DataService.getRequest("/api/v1/whoami/")
      .then(async (res) => {
        if (!(res.status === 200)) {
          // Show error and reset form
          const error = await res.json();
        } else {
          // Browse to login views
          const user = await res.json().then((user) => {
            console.log("user", user);
            setScore(user.totalPenaltyPoints);
          });
        }
      })
      .catch((err) => {
        if (err.message.match(/Failed to fetch/)) {
          alert("The server cannot be reached. Did you start it?");
        } else {
          alert(`Something went wrong during the sign up: ${err.message}`);
        }
      });
  }, []);
  return (
    <div className="card transition ease-in-out duration-1000 focus: hover:scale-105 lg:card-side bg-base-200 shadow-xl max-w-5xl m-12">
      <div
        className="radial-progress m-12 animate__animated animate__zoomIn border-l-deep-purple-accent-700 text-success shadow-xl"
        style={{
          // @ts-ignore
          "--value": realScore,
          "--size": "12rem",
          "--thickness": "1.5rem",
        }}
      >
        <div className="text-2xl font-black">{realScore}</div>
      </div>{" "}
      <div className="card-body">
        <h2 className="card-title te">
          {localStorage.getItem("ass")
            ? `Your ransomware protection score has been determined. `
            : "You have not answered the test yet. "}
        </h2>
        <p>
          {localStorage.getItem("ass")
            ? "You scored a grade of " +
              realScore +
              " out of 100 points. Click the button below to see the results."
            : "You have not answered the test yet. Click the button below to answer the test."}
        </p>
        <div className="card-actions justify-end">
          {localStorage.getItem("ass") ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                window.location.href = "/assessment/results";
              }}
            >
              See results
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                window.location.href = "/assessment";
              }}
            >
              Start Assignment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModuleAsssessmentResult;
