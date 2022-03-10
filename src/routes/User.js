import React from "react";
import { useParams } from "react-router-dom";
import ModuleAsssessmentResult from "../components/dashboard_modules/ModuleAsssessmentResult";
import ModuleCVE from "../components/dashboard_modules/ModuleCVE";
import ModuleLearn from "../components/dashboard_modules/ModuleLearn";
import ModuleMyTeam from "../components/dashboard_modules/ModuleMyTeam";
import Nav from "../components/Nav";

function User(props) {
  const { id } = useParams();

  return (
    <div className=" bg-base-100  flex flex-col">
      <Nav isLoggedIn={true} />
      <div className="hero min-h-screen inline-flex flex-container flex-wrap content-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">User:{id}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
