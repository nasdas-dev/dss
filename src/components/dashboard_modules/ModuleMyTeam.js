import React, { useEffect, useState } from "react";
import DataService from "../../services/DataService";

function ModuleMyTeam() {
  const [managedUsers, setManagedUsers] = useState([]);
  const [myUserId, setMyUserId] = useState("");
  const [newUser, setNewUser] = useState("");
  const [count, setCount] = useState(0);

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
            setMyUserId(user._id);
            setManagedUsers(user.manages);
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

  function getDataForUser(userId) {
    DataService.getRequest(`/api/v1/users/${userId}`).then(async (res) => {
      if (!(res.status === 200)) {
        // Show error and reset form
        // @ts-ignore
        const error = await res.json();
      } else {
        // Browse to login views
        // @ts-ignore
        const user = await res.json().then((user) => {
          console.log("user", user);
          setNewUser(user);
        });
      }
    });
  }

  function addNewUser(userId) {
    DataService.postRequest(`/api/v1/users/${myUserId}`, {
      manages: [userId],
    }).then(async (res) => {
      if (!(res.status === 200)) {
        // Show error and reset form
        // @ts-ignore
        const error = await res.json();
      } else {
        // Browse to login views
        // @ts-ignore
        const user = await res.json().then((user) => {
          console.log("user", user);
          setManagedUsers([...managedUsers, user.manages]);
        });
      }
    });
  }

  // setCount(count + 1);

  // if (count === 1) {
  //   setManagedUsers([
  //     ...managedUsers,
  //     {
  //       key: 1,
  //       username: "Max Mustermann",
  //       score: 92,
  //       status: "Anatomy",
  //     },
  //   ]);
  // } else if (count === 2) {
  //   setManagedUsers([
  //     ...managedUsers,
  //     {
  //       key: 2,
  //       username: "Kevin",
  //       score: 55,
  //       status: "None",
  //     },
  //   ]);
  // }

  return (
    <>
      {
        // modal
      }

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label
        // @ts-ignore
        for="my-modal-4"
        className="modal cursor-pointer "
      >
        <label
          className="modal-box relative p-20"
          // @ts-ignore
          for=""
        >
          <h3 className="text-lg font-bold">Add a new user to your team</h3>
          <p className="py-4">
            Enter the userId of the user you want to add to your team below.
          </p>
          <div className="flex flex-col">
            <input
              className="w-full p-2 border-b-2 border-gray-400 input input-accent"
              type="text"
              placeholder="UserId"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <button
              className="btn btn-primary mt-5"
              onClick={() => addNewUser(newUser)}
            >
              Add
            </button>
          </div>
        </label>
      </label>

      <div className="card transition ease-in-out duration-1000 hover:scale-105 lg:card-side bg-base-200 shadow-xl max-w-3xl m-12 p-5 flex flex-wrap flex-row">
        <div className="text-4xl font-black m-4 p-4 min-w-full">My Team</div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {
              //<!-- head -->
            }
            <thead>
              <tr>
                <th>Name</th>
                <th>Assessment Score</th>
                <th>eLearning Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {
                //<!-- row 1 -->
              }

              {managedUsers.length === 0 ? (
                <tr>
                  <td
                    // @ts-ignore
                    colSpan="3"
                    className="rounded-xl"
                  >
                    <div className=" flex container flex-row flex-1 flex-wrap justify-center">
                      <div className="rounded-lg break-after-auto text-center min-w-full mt-5 mb-5">
                        <p>You have no managed users</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                console.log("managedUsers", managedUsers)
              )}
              {managedUsers.map((user) => (
                <tr key={user.id}>
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
                        <div className="font-bold">{user.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.score}</td>
                  {<td>{user.status}</td>}
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
            {
              //<!-- foot -->
            }
            <div className="m-10">
              <label
                // @ts-ignore
                for="my-modal-4"
                className="btn btn-primary modal-button "
              >
                <a>Add a user</a>
              </label>
            </div>
          </table>
        </div>
      </div>
    </>
  );
}
export default ModuleMyTeam;
