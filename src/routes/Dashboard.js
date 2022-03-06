import React from "react";
import Nav from "../components/Nav";
import "animate.css";

function Dashboard(props) {
  return (
    <div className=" bg-base-100  flex flex-col">
      <Nav isLoggedIn={true} className="top-0" />
      <div className="hero min-h-screen inline-flex flex-container flex-wrap content-center justify-center">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <div
            className="radial-progress m-10 animate__animated animate__zoomIn border-l-deep-purple-accent-700 text-success"
            style={{
              "--value": "80",
              "--size": "12rem",
              "--thickness": "2rem",
            }}
          >
            <div className="text-2xl font-black">80</div>
          </div>{" "}
          <div class="card-body">
            <h2 class="card-title">
              Your ransomware protection score <br /> has been determined.
            </h2>
            <p>
              Click the button to compare your results with other users <br />{" "}
              and receive helpful tips to improve your security.
            </p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">My results</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl ">
          <div className="text-4xl font-black m-4 p-4">
            CVE <br />
            Tracker
          </div>
          <div class="card-body">
            <h2 class="card-title">
              Find the latest CVE news for your software stack below.
            </h2>
            <div class="stats stats-vertical shadow">
              <div class="stat">
                <div class="stat-title">Microsoft Office 365</div>
                <div class="stat-value">CVE-4321</div>
                <div class="stat-desc">Mar 4th</div>
              </div>

              <div class="stat">
                <div class="stat-title">Java Runtime Environment</div>
                <div class="stat-value">CVE-4510</div>
                <div class="stat-desc">Jan 21st</div>
              </div>

              <div class="stat">
                <div class="stat-title">Adobe Acrobat</div>
                <div class="stat-value">CVE-1121</div>
                <div class="stat-desc">Jan 3rd</div>
              </div>
            </div>
            <div class="card-actions justify-end">
              <button class="btn btn-primary p-4 mt-4">Full list</button>
            </div>
          </div>
        </div>

        <div class="card lg:card-side bg-base-100 shadow-xl">
          <div class="overflow-x-auto w-full">
            <table class="table w-full">
              {
                //<!-- head -->
              }
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  //<!-- row 1 -->
                }
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {
                  //<!-- row 2 -->
                }
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-3@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Brice Swyre</div>
                        <div class="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Tax Accountant
                    </span>
                  </td>
                  <td>Red</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {
                  //<!-- row 3 -->
                }
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-4@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Marjy Ferencz</div>
                        <div class="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Rowe-Schoen
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Office Assistant I
                    </span>
                  </td>
                  <td>Crimson</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {
                  //<!-- row 4 -->
                }
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-5@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Yancy Tear</div>
                        <div class="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Wyman-Ledner
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Community Outreach Specialist
                    </span>
                  </td>
                  <td>Indigo</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
              {
                //<!-- foot -->
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
