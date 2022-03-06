import React from "react";
import { Link } from "react-router-dom";

function CardPrimary(props) {
  return (
    <div className="m-16 text-left hero-content rounded-3xl card card-title shadow-xl backdrop-blur-sm  bg-slate-500 bg-opacity-10 max-w-xl">
      <div className="rounded-3xl" id="bg">
        <div className="max-w-xl m-2 bg-base-200 rounded-3xl menu-title">
          <h1 className="mt-2 p-12 text-5xl inset-1 font-bold">
            Protect your infrastructure against Ransomware
          </h1>
          <p className="ml-10 mr-10 p-4">
            Fill in the assessment now and get state of the art recommendations
            to improve your IT security.
          </p>
          <div className="flex justify-center">
            <Link to="/assessment" className="">
              <button className="m-10 btn btn-primary text-white border-0 font-bold tracking-tight font-sans">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPrimary;
