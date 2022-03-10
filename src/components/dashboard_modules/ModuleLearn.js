import React from "react";
import { Link } from "react-router-dom";

function ModuleLearn() {
  return (
    <div class="card transition ease-in-out duration-1000 hover:scale-105 bg-base-200 w-96  shadow-xl max-w-2xl m-12">
      <div className="text-4xl font-black m-4 p-4">eLearnings</div>
      <div class="card-body">
        <h2 class="card-title mb-6">
          Learn more about ransomware by conducting this trainings.
        </h2>
        <div class="stats stats-vertical shadow bg-slate-00 ">
          <ul className="menu-vertical ">
            <li>
              <a
                href="/"
                className="stat hover:bg-slate-700 border-slate-700 border-b-2"
              >
                <div class="stat-value text-xl">
                  Lifecycle <br /> of Ransomware
                </div>
                <div class="stat-title whitespace-normal mt-2">
                  What are the characteristics of a ransomware attack? What
                  phases occur in an attack?
                </div>
                <div class="stat-desc font-black mt-2">Mar 4th</div>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="stat hover:bg-slate-700 border-slate-700 border-b-2"
              >
                <div class="stat-value text-xl">
                  Infection <br /> Vectors
                </div>
                <div class="stat-title whitespace-normal mt-2">
                  How does a system get infected with ransomware?
                </div>
                <div class="stat-desc font-black mt-2">Feb 4th</div>
              </a>
            </li>
            <li>
              <a href="/" className="stat hover:bg-slate-700">
                <div class="stat-value text-xl">
                  Social <br />
                  Engineering
                </div>
                <div class="stat-title whitespace-normal mt-2">
                  What tricks do attackers use to fool employees? How should you
                  react?
                </div>
                <div class="stat-desc font-black mt-2">Jan 3rd</div>
              </a>
            </li>
          </ul>
        </div>
        <div class="card-actions justify-end">
          <Link to="/learnings" className="">
            <button class="btn btn-primary p-4 mt-4">Full list</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ModuleLearn;
