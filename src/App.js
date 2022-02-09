import logo from "./logo.svg";
import "./App.css";
import img from "./assets/667.png";
import Nav from "./Nav.js";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

function App() {
  const changePattern = (e) => {
    let page_bg = document.getElementById("page_bg");
    page_bg.style.setProperty(
      "background-size",
      `
      ${100 - 2 * e.pageX * 0.000001}px ${100 - 2 * e.pageY * 0.000001}px
      `
    );
    page_bg.style.setProperty(
      "background-position",
      `
      ${200 - 50 * e.pageX * 0.00001}% ${100 - 50 * e.pageY * 0.00001}%
      `
    );
  };
  const changeColor = (e) => {
    let bg = document.getElementById("bg");
    bg.style.setProperty(
      "background-image",
      `radial-gradient(at ${e.pageX * 0.05}% ${
        e.pageY * 0.05
      }%,hsl(347, 93%, 57%) 0, transparent 50%),
      radial-gradient(at ${e.pageX * 0.15}% ${
        e.pageY * 0.15
      }%,rgb(88, 3, 206) 0, transparent 50%),
      radial-gradient(at ${e.pageX * 0.4}% ${
        e.pageY * 0.001
      }%,rgb(165, 253, 240) 0, transparent 50%),
      radial-gradient(at ${e.pageY * 0.01 * e.pageX}% ${
        e.pageX * 0.001
      }%,rgb(88, 3, 206) 0, transparent 50%),
      radial-gradient(at ${e.pageX * 0.11}% ${
        e.pageY * 0.01 * e.pageX
      }%,hsl(347, 93%, 57%) 0, transparent 50%),
      radial-gradient(at ${e.pageY * 0.2}% ${
        e.pageY * 0.15 * e.pageX
      }%,hsl(347, 93%, 57%) 0, transparent 50%)
      `
    );
  };

  return (
    <div
      className="background bg-base-100"
      onMouseMove={(e) => {
        changePattern(e);
        changeColor(e);
      }}
      id="page_bg"
    >
      <Nav />

      <div className="hero min-h-screen">
        <div className="hero-content rounded-lg"></div>
        <div className="text-left hero-content rounded-3xl text-content card card-title shadow-xl backdrop-blur-sm  bg-slate-500 m-5 bg-opacity-10 ">
          <div className="rounded-3xl" id="bg">
            <div className="max-w-xl m-2 bg-base-200 rounded-3xl menu-title">
              <h1 className="mt-2 p-14 text-5xl inset-1 font-bold">
                Protect your infrastructure against Ransomware
              </h1>
              <p className="ml-10 mr-10 p-4">
                Fill in the assessment now and get state of the art
                recommendations to improve your IT security.
              </p>
              <Link to="/assessment">
                <button className="m-10 p-4 btn btn-primary text-white border-0 shadow-2xl font-bold tracking-tight font-sans">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-10 footer bg-base-200 text-base-content footer-center">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2021 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
