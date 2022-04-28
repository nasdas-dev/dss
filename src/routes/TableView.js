import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";

function TableView(props) {
  const { state } = useLocation();
  const table = [state];
  console.log(state);
  console.log(table);
  console.log(table[0].state[0]);

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
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                //<!-- row 1 -->
              }
              {table.map((data, index) => (
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
                        <div className="font-bold">{data.state}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {data.state[1]} <br />
                  </td>
                  <td>{data.state[2]}</td>
                </tr>
              ))}
              {
                //<!-- row 2 -->
              }
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
