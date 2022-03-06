import React, { useState, useEffect } from "react";
import DataService from "../services/DataService";
import KeyPressHelper from "../helpers/KeyPressHelpers";

function SignUp(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
    passwordNotIdentical: false,
    usernameInput: "",
  });

  function handleInputChange(key, value) {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function resetForm() {
    setState({
      email: "",
      password: "",
      passwordRepeat: "",
      passwordNotIdentical: false,
    });
  }

  useEffect(() => {
    // Update the document title using the browser API
    state.usernameInput.focus();
  }, []);

  function signUp() {
    if (state["password"] !== state["passwordRepeat"]) {
      // Reset form if passwords not identically
      setState((prevState) => ({
        ...prevState,
        passwordNotIdentical: true,
        password: "",
        passwordRepeat: "",
      }));
    } else {
      // Register new user on server
      DataService.postRequest("/users", {
        email: state.email,
        password: state.password,
      })
        .then(async (res) => {
          if (!res.ok) {
            // Show error and reset form
            const error = await res.json();
            resetForm();
          } else {
            // Browse to login views
            props.history.push("/login");
          }
        })
        .catch((err) => {
          if (err.message.match(/Failed to fetch/)) {
            alert("The server cannot be reached. Did you start it?");
          } else {
            alert(`Something went wrong during the sign up: ${err.message}`);
          }
        });
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
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
                  KeyPressHelper.executeWhenEnter(e, signUp.bind(this))
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
                  KeyPressHelper.executeWhenEnter(e, signUp.bind(this))
                }
                onChange={(e) => {
                  handleInputChange("password", e.target.value);
                }}
              />
            </div>
            <div>
              <label for="confirm" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm"
                name="confirmpassword"
                type="password"
                autocomplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={state.passwordRepeat}
                onKeyPress={(e) =>
                  KeyPressHelper.executeWhenEnter(e, signUp.bind(this))
                }
                onChange={(e) => {
                  handleInputChange("passwordRepeat", e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                signUp();
              }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
