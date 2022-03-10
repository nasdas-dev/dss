import React, { useState } from "react";
import KeyPressHelper from "../helpers/KeyPressHelpers";
import DataService from "../services/DataService";
import { useNavigate } from "react-router-dom";

function Login(props) {
  let navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(key, value) {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function login(e) {
    e.preventDefault();

    DataService.postRequest("/api/login", {
      email: state.email.toLowerCase(),
      password: state.password,
    })
      .then(async (res) => {
        if (!res.ok) {
          // Show error message and reset login form
          const error = await res.json();

          setState({ email: "" });
          setState({ password: "" });
        } else {
          const user = await res.json();
          // Save passed token in local storage and browse to game view
          localStorage.setItem("token", user.token);
          localStorage.setItem("uid", user.uid);
          localStorage.setItem("email", user.email);

          navigate("/dashboard");
        }
      })
      .catch((err) => {
        if (err.message.match(/Failed to fetch/)) {
          alert("The server cannot be reached. Did you start it?");
        } else {
          alert(`Something went wrong during the login: ${err.message}`);
        }
      });
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="justify-center">
          <svg
            className="m-auto"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            {" "}
            <g
              transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
              fill="#eeeeee"
              stroke="none"
            >
              {" "}
              <path d="M1365 2900 c-237 -25 -469 -110 -665 -243 -111 -76 -295 -263 -369 -376 -160 -244 -235 -493 -235 -781 0 -287 76 -539 232 -775 241 -365 617 -586 1066 -627 330 -29 671 70 952 280 278 207 477 535 540 892 19 111 19 349 0 460 -50 285 -175 534 -369 737 -259 270 -590 420 -972 437 -55 2 -136 1 -180 -4z m275 -191 c391 -48 728 -271 917 -604 197 -350 214 -766 43 -1123 -27 -56 -59 -116 -70 -132 l-21 -30 -73 64 c-192 167 -426 283 -673 333 -123 25 -403 25 -526 0 -247 -50 -475 -162 -668 -329 l-78 -67 -21 29 c-41 58 -120 237 -145 330 -78 291 -49 582 84 855 126 257 305 435 566 561 215 104 437 142 665 113z" />{" "}
              <path d="M1368 2514 c-240 -58 -413 -267 -425 -514 -9 -171 42 -306 162 -425 112 -113 236 -165 394 -165 160 0 281 50 397 165 219 218 221 564 4 784 -139 142 -343 201 -532 155z" />{" "}
            </g>{" "}
          </svg>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-50">
            Log in to your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={login}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                ref={(input) => {
                  state.usernameInput = input;
                }}
                value={state.email}
                onKeyPress={(e) =>
                  KeyPressHelper.executeWhenEnter(e, login.bind(this))
                }
                onChange={(e) => {
                  handleInputChange("email", e.target.value);
                }}
              />
            </div>
            <div>
              <label for="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={state.password}
                onKeyPress={(e) =>
                  KeyPressHelper.executeWhenEnter(e, login.bind(this))
                }
                onChange={(e) => {
                  handleInputChange("password", e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group btn relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
              disabled={!state.email || !state.password}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-white group-hover:text-slate-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
