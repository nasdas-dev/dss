import React from "react";
import { Link } from "react-router-dom";

function ModuleCVE() {
  return (
    <div class="card transition ease-in-out duration-1000 hover:scale-105 bg-base-200 w-96 shadow-xl max-w-2xl m-12">
      <div className="text-4xl font-black m-4 p-4">
        CVE <br />
        Tracker
      </div>
      <div class="card-body">
        <h2 class="card-title mb-6">
          Find the latest CVE news for your software stack below.
        </h2>
        <div class="stats stats-vertical shadow">
          <a href="/" className="stat hover:bg-slate-700">
            <div class="stat-title font-black">Microsoft Office 365</div>
            <div class="stat-value">CVE-4321</div>
            <div class="stat-desc">Mar 4th</div>
          </a>

          <a href="/" className="stat hover:bg-slate-700">
            <div class="stat-title font-black">Java Runtime Environment</div>
            <div class="stat-value">CVE-4510</div>
            <div class="stat-desc">Jan 21st</div>
          </a>

          <a href="/" className="stat hover:bg-slate-700">
            <div class="stat-title font-black">Adobe Acrobat</div>
            <div class="stat-value">CVE-1121</div>
            <div class="stat-desc">Jan 3rd</div>
          </a>
        </div>
        <div class="card-actions justify-end">
          <Link to="/cves" className="">
            <button class="btn btn-primary p-4 mt-4">Full list</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ModuleCVE;
