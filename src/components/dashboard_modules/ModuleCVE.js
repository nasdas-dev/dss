import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataService from "../../services/DataService";

function ModuleCVE() {
  const [software, setSoftware] = useState([]);
  const [current, setCurrent] = useState("");
  const [fail, setFail] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("uid");
    // Gets the user data
    DataService.getRequest(`/api/v1/whoami/`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          const user = await res.json();
          setSoftware(user.techStack);
        }
      })
      .catch((err) => {
        if (err.message.match(/Failed to fetch/)) {
          alert("The server cannot be reached. Did you start it?");
        } else {
          alert(`Something went wrong during the login: ${err.message}`);
        }
      });
  }, []);

  function getInfoForSoftware(software) {
    DataService.getOutsideRequest(
      `https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=${software}`
    ).then(async (res) => {
      if (!res.ok) {
        console.log(res);
        throw new Error(res.statusText);
      } else {
        const cve = await res.text();
        var parser = new DOMParser();
        var doc = parser.parseFromString(cve, "text/html");
        let latest = doc.querySelector(
          "#TableWithRules > table > tbody > tr:nth-child(1) > td:nth-child(1) > a"
        );
        try {
          setCurrent(latest.textContent);
          setFail(false);
        } catch (error) {
          setCurrent("");
          setFail(true);
        }
      }
    });
  }

  return (
    <>
      {
        // modal
      }

      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <label
        // @ts-ignore
        for="my-modal-7"
        className="modal cursor-pointer "
      >
        <label
          className="modal-box relative p-20"
          // @ts-ignore
          for=""
        >
          <h3 className="text-lg font-bold">
            Add new software to your account.
          </h3>
          <p className="py-4">
            Enter the name of the software you want to add to your team below.
          </p>
          <div className="flex flex-col">
            <input
              className="w-full p-2 border-b-2 border-gray-400 input input-accent"
              type="text"
              placeholder="Software Name"
            />
            <button className="btn btn-primary mt-5">Add</button>
          </div>
        </label>
      </label>

      <div className="card transition ease-in-out duration-1000 hover:scale-105 bg-base-200 w-96 shadow-xl max-w-2xl m-12">
        <div className="text-4xl font-black m-4 p-4">
          CVE <br />
          Tracker
        </div>
        <div className="card-body">
          <h2 className="card-title mb-6">
            Find the latest CVE news for your software stack below.
          </h2>
          {software ? (
            <>
              <div className="stats stats-vertical shadow border-slate-700 border-b-4">
                {software.map((s) => (
                  <>
                    <a
                      href={`https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=${s}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="stat hover:bg-slate-700"
                    >
                      <div className="stat-title text-lg font-black">
                        {getInfoForSoftware(s)} {s}
                      </div>
                      <div className="stat-value text-3xl mt-1 mb-2">
                        {current}
                      </div>
                      {setFail ? (
                        <div className="stat-value text-sm mt-1 mb-2">
                          CVE Database can't be <br></br> reached at the moment.
                          <br></br>
                          Please try again later.
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="stat-desc text-lg font-black">
                        Click to see all vulnerabilites
                      </div>
                    </a>
                  </>
                ))}
              </div>
              {
                //<div className="card-actions justify-end">
                //<Link to={"/cves"} state={{ state: software }} className="">
                //<button className="btn btn-primary p-4 mt-4">
                //Full list
                //</button>
                //</Link>
                //</div>
              }
            </>
          ) : (
            <div className="stats stats-vertical shadow border-slate-700 border-b-4">
              <div className=" flex container flex-row flex-1 flex-wrap justify-center">
                <div className="rounded-lg break-after-auto text-center min-w-full mt-5">
                  <p>You have not added any software yet.</p>
                </div>
                <div className="">
                  <label
                    // @ts-ignore
                    for="my-modal-7"
                    className="btn btn-primary modal-button m-5 "
                  >
                    <a>Add software</a>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default ModuleCVE;
