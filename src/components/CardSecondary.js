import React from "react";
import { Link } from "react-router-dom";

function CardSecondary({
  span,
  spancolor = "text-primary",
  h1,
  p,
  buttonText,
}) {
  return (
    <div className="mb-16 hero-content rounded-3xl w-5/6 shadow-lg bg-base-100 max-w-4xl">
      <div className="bg-opacity-50 rounded-3xl">
        <h1 className="card-title text-3xl inset-1 font-bold ml-10 mr-10">
          <span className={`text-5xl font-serif font-black ${spancolor}`}>
            {span}
          </span>{" "}
          {h1}
        </h1>
        <p className="ml-10 mr-10 p-4">{p}</p>
        <button className="m-10 p-4 btn btn-secondary text-white border-0 shadow-2xl font-bold tracking-tight font-sans w-2/6">
          {buttonText}
        </button>{" "}
      </div>
    </div>
  );
}

export default CardSecondary;
