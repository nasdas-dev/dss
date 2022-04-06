import React from "react";
import { Link } from "react-router-dom";

function ModuleCVE() {
  return (
    <div className="card transition ease-in-out duration-1000 hover:scale-105 bg-base-200 w-96 shadow-xl max-w-2xl m-12">
      <div className="text-4xl font-black m-4 p-4">
        CVE <br />
        Tracker
      </div>
      <div className="card-body">
        <h2 className="card-title mb-6">
          Find the latest CVE news for your software stack below.
        </h2>
        <div className="stats stats-vertical shadow border-slate-700 border-b-4">
          <a
            href="https://www.cvedetails.com/cve/CVE-2008-2592/"
            rel="noopener noreferrer"
            target="_blank"
            className="stat hover:bg-slate-700"
          >
            <div className="stat-title text-lg font-black">Oracle Database</div>
            <div className="stat-value text-3xl mt-1 mb-2">CVE-2008-2592</div>
            <div className="stat-desc text-lg font-black">
              Version: 11.1.0.6
            </div>
          </a>

          <a
            href="https://www.cvedetails.com/cve/CVE-2021-43546/"
            rel="noopener noreferrer"
            target="_blank"
            className="stat hover:bg-slate-700"
          >
            <div className="stat-title text-lg font-black">Mozilla Firefox</div>
            <div className="stat-value text-3xl mt-1 mb-2">CVE-2021-43546</div>
            <div className="stat-desc text-lg font-black">Version: 95.0</div>
          </a>

          <a
            href="https://www.cvedetails.com/cve/CVE-2018-4916/"
            rel="noopener noreferrer"
            target="_blank"
            className="stat hover:bg-slate-700 border-slate-700 border-b-4 drop-shadow-md"
          >
            <div className="stat-title text-lg font-black">Adobe Acrobat</div>
            <div className="stat-value text-3xl mt-1 mb-2">CVE-2018-4916</div>
            <div className="stat-desc text-lg font-black">
              Version: 2018.009.20050
            </div>
          </a>
        </div>
        <div className="card-actions justify-end">
          <Link to="/cves" className="">
            <button className="btn btn-primary p-4 mt-4">Full list</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ModuleCVE;
