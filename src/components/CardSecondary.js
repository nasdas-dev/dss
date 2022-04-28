import React from "react";
import { Link } from "react-router-dom";
import Odometer from "react-odometerjs";
import "../odometer-theme-train-station.css";

function CardSecondary({
  span,
  h1_2,
  spancolor = "text-primary",
  h1,
  h1_underline,
  p,
  buttonText,
}) {
  return (
    <>
      <div className="mb-16 hero-content rounded-3xl w-5/6 shadow-lg bg-base-100 max-w-4xl">
        <div className="bg-opacity-50 rounded-3xl ">
          <div className="card-title text-3xl inset-1 font-bold ml-10 mr-3 flex flex-row">
            <div className="scale-125 ml-4 mr-6">
              <Odometer
                value={span}
                animation="count"
                format="('ddd)"
                duration={1000}
              />
            </div>
            <h1 className="card-title text-3xl font-bold ml-2 mr-10 basis-1/2 inline-block">
              {h1}
              {<span className={`${spancolor}`}>{h1_underline} </span>}
              {h1_2}
            </h1>
          </div>
          <p className="ml-6 mr-10 p-4 mt-5 font-semibold text-lg">{p}</p>
          <button className="m-10 p-4 btn btn-square text-white border-0 shadow-2xl font-bold tracking-tight font-sans w-2/6">
            {buttonText}
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default CardSecondary;
