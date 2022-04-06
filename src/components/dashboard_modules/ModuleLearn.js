import React from "react";
import { Link } from "react-router-dom";

function ModuleLearn() {
  return (
    <div className="card transition ease-in-out duration-1000 hover:scale-105 bg-base-200 w-96  shadow-xl max-w-2xl m-12">
      <div className="text-4xl font-black m-4 p-4">eLearnings</div>
      <div className="card-body">
        <h2 className="card-title mb-6">
          Learn more about ransomware by conducting this trainings.
        </h2>
        <div className="stats stats-vertical shadow bg-slate-00 ">
          <ul className="menu-vertical ">
            <li>
              <a
                href="/"
                className="stat hover:bg-slate-700 border-slate-700 border-b-2"
              >
                <div className="stat-value text-xl">
                  Lifecycle <br /> of Ransomware
                </div>
                <div className="stat-title whitespace-normal mt-2">
                  What are the characteristics of a ransomware attack? What
                  phases occur in an attack?
                </div>
                <div className="stat-desc font-black mt-2">Mar 4th</div>
              </a>
            </li>
            <li>
              <div className="stat hover:bg-slate-700 border-slate-700 border-b-2 cursor-not-allowed">
                <div className="stat-value text-xl">
                  Infection <br /> Vectors
                </div>
                <div className="stat-title whitespace-normal mt-2">
                  How does a system get infected with ransomware?
                </div>
                <div className="stat-desc font-black mt-2">Coming Soon</div>
              </div>
            </li>
            <li>
              <div className="stat hover:bg-slate-700 border-slate-700 border-b-4 cursor-not-allowed drop-shadow-md">
                <div className="stat-value text-xl">
                  Social <br />
                  Engineering
                </div>
                <div className="stat-title whitespace-normal mt-2">
                  What tricks do attackers use to fool employees? How should you
                  react?
                </div>
                <div className="stat-desc font-black mt-2">Coming Soon</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="card-actions justify-end">
          <Link to="/learnings" className="">
            <button className="btn btn-primary p-4 mt-4">Full list</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ModuleLearn;
