import React from "react";
import { Link } from "react-router-dom";

function Assessment(props) {
  return (
    <>
      <div className="hero min-h-screen bg-base-100">
        <ul className="fixed menu m-10 border bg-base-300 rounded-box top-0 right-0 h-16 w-16 items-center z-50">
          <li className="">
            <Link to="/dashboard">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </li>
        </ul>

        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Ransomware Assessment</h1>
            <p className="mb-5">
              You will be asked a total of 34 questions. Always make sure to
              choose the answer option that corresponds to the most accurate
              depiction of your thinking. After you have submitted your test,
              you will be given feedback on your answers.
            </p>
            <Link to={"/assessment/questions"}>
              <button className="btn btn-primary text-white">
                Start the assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assessment;
