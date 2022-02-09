import React from "react";
import { Link } from "react-router-dom";

function Assessment(props) {
  return (
    <>
      <div class="hero min-h-screen bg-base-100">
        <ul class="menu m-10 border bg-base-300 rounded-box absolute top-0 right-0 h-16 w-16 items-center">
          <li class="">
            <Link to="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </li>
        </ul>

        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Ransomware Assessment</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={"/assessment/questions"}>
              <button class="btn btn-primary text-white">
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
