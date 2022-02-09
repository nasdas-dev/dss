import React from "react";
import data from "../data/data.json";
import QuestionCard from "./QuestionCard";
import { Link } from "react-router-dom";
function Questions(props) {
  return (
    <div>
      <ul class="menu m-10 border bg-base-300 rounded-box absolute top-0 right-0 h-16 w-16 items-center z-50">
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
      <div className="columns-2 flex flex-1">
        <ul class="w-full steps steps-vertical h-screen basis-1/6 p-20 m-20">
          <li class="step step-info">Fly to moon</li>
          <li class="step step-info">Shrink the moon</li>
          <li class="step step-info">Grab the moon</li>
          <li data-content="?" class="step step-error">
            Sit on toilet
          </li>
        </ul>
        <div className="basis-5/6 h-1/4">
          {data.map((element, i) => (
            <QuestionCard key={i} data={element} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
