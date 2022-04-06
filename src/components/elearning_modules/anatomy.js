import React from "react";
import Nav from "../components/Nav";

function TableView(props) {
  return (
    <div className=" bg-base-100  flex flex-col">
      <Nav isLoggedIn={true} className="" />
      <div className="hero min-h-screen inline-flex flex-container flex-wrap content-center justify-center">
        <div className="overflow-x-auto w-full card card-body">
          <table className="table w-full">
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
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="data:image/webp;base64,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"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {
                //<!-- row 2 -->
              }
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="data:image/webp;base64,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"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {
                //<!-- row 3 -->
              }
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="data:image/webp;base64,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"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td>Crimson</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {
                //<!-- row 4 -->
              }
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="data:image/webp;base64,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"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
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
  );
}

export default TableView;
