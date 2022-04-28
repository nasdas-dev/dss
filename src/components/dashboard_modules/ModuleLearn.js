import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataService from "../../services/DataService";

function ModuleLearn() {
  const [elearningStatus, setElearningStatus] = useState([""]);

  useEffect(() => {
    DataService.getRequest("/api/v1/whoami/")
      .then(async (res) => {
        if (!(res.status === 200)) {
          // Show error and reset form
          // @ts-ignore
          const error = await res.json();
        } else {
          // Browse to login views
          // @ts-ignore
          const user = await res.json().then((user) => {
            console.log("user", user);
            setElearningStatus(user.elearningStatus);
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
    <div className="card transition ease-in-out duration-1000 hover:scale-105 bg-base-200 w-96  shadow-xl max-w-2xl m-12">
      <div className="text-4xl font-black m-4 p-4">eLearnings</div>
      <div className="card-body">
        <h2 className="card-title mb-6">
          Learn more about ransomware by conducting this trainings.
        </h2>
        <div className="indicator">
          <div className="stats stats-vertical shadow bg-slate-00 ">
            <ul className="menu-vertical ">
              <li>
                <Link to="/learnings/anatomy" className="">
                  {elearningStatus.includes("Anatomy") ? (
                    <span className="indicator-item badge badge-success bg-green-600 border-3 border-green-900 drop-shadow-lg text-white scale-150 font-black z-50">
                      ✓
                    </span>
                  ) : (
                    <></>
                  )}
                  {elearningStatus.includes("Anatomy") ? (
                    <a
                      href="/"
                      className="stat hover:bg-green-200 bg-green-100 text-black border-slate-700 border-b-2"
                    >
                      {" "}
                      <div className="stat-value text-xl">
                        Anatomy <br /> of Ransomware
                      </div>
                      <div className="stat-title whitespace-normal mt-2">
                        What are the characteristics of a ransomware attack?
                        What phases occur in an attack?
                      </div>
                      <div className="stat-desc font-black mt-2">Mar 4th</div>
                    </a>
                  ) : (
                    <a
                      href="/"
                      className="stat hover:bg-slate-700 border-slate-700 border-b-2"
                    >
                      {" "}
                      <div className="stat-value text-xl">
                        Anatomy <br /> of Ransomware
                      </div>
                      <div className="stat-title whitespace-normal mt-2">
                        What are the characteristics of a ransomware attack?
                        What phases occur in an attack?
                      </div>
                      <div className="stat-desc font-black mt-2">Mar 4th</div>
                    </a>
                  )}
                </Link>
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
                    What tricks do attackers use to fool employees? How should
                    you react?
                  </div>
                  <div className="stat-desc font-black mt-2">Coming Soon</div>
                </div>
              </li>
            </ul>
          </div>
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
