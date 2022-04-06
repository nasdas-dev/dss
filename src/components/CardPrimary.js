import React from "react";
import { Link } from "react-router-dom";

function CardPrimary(props) {
  return (
    <div className="m-16 text-left hero-content rounded-3xl card card-title shadow-xl backdrop-blur-sm  bg-slate-500 bg-opacity-10 max-w-xl">
      <div className="rounded-3xl" id="bg">
        <div className="max-w-xl m-2 bg-base-200 rounded-3xl menu-title">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default CardPrimary;
