import "./styles/Home.css";
import Nav from "../components/Nav.js";
import { changeColor, changePattern } from "../utils/backgroundHelpers";
import CardPrimary from "../components/CardPrimary";
import CardSecondary from "../components/CardSecondary";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const damagesCaused = () => {
    let secondsElapsedSinceBeginningOfDay =
      new Date().getHours() * 60 * 60 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds();

    let damagesCaused = secondsElapsedSinceBeginningOfDay * 634.2; //1000 because displayed as thousands
    return damagesCaused;
  };

  const attacksOccured = () => {
    let secondsElapsedSinceBeginningOfMonth =
      (new Date().getDate() - 1) * 24 * 60 * 60 +
      new Date().getHours() * 60 * 60 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds();

    let attacksOccured = secondsElapsedSinceBeginningOfMonth / 11;

    return attacksOccured;
  };
  const [attacks, setAttacks] = useState(attacksOccured());
  const [damages, setDamages] = useState(damagesCaused());

  useEffect(() => {
    const attacksOccuredtimer = setTimeout(() => {
      setAttacks(attacksOccured());
      setDamages(damagesCaused());
    }, 5000);
    return () => clearTimeout(attacksOccuredtimer);
  });
  return (
    <div
      className="background bg-base-100 justify-center items-center flex-container flex flex-col"
      onMouseMove={(e) => {
        //        changePattern(e);
        changeColor(e);
      }}
      id="page_bg"
    >
      <Nav isLoggedIn={false} />

      <div className="hero min-h-screen inline-flex flex-container flex-wrap content-center justify-center">
        <div className="hero-content">
          <CardPrimary>
            <h1 className="mt-2 p-12 text-5xl inset-1 font-bold">
              Protect your infrastructure against Ransomware
            </h1>
            <p className="ml-10 mr-10 p-4">
              Fill in the assessment now and get state of the art
              recommendations to improve your IT security.
            </p>
            <div className="flex justify-center">
              <Link to="/dashboard" className="">
                <button className="m-10 btn btn-primary text-white border-0 font-bold tracking-tight font-sans">
                  Get Started
                </button>
              </Link>
            </div>
          </CardPrimary>
        </div>
        <div className="flex-container flex-col hero-content">
          <CardSecondary
            span={attacks}
            h1_2={"took place since the beginning of this month."}
            h1_underline={"attacks"}
            h1={`ransomware `}
            p={
              "When it comes to cybersecurity, ransomware is one of the fastest-growing threats in recent history. Experts from Cybersecurity Ventures estimate that one attack takes place every 11 seconds in 2022."
            }
            buttonText={"Learn more"}
          />
          <CardSecondary
            span={damages}
            h1_2={"were caused by ransomware today."}
            spancolor={"text-secondary"}
            h1_underline={" damages "}
            h1={"dollars worth of"}
            p={`Cybersecurity Ventures predicts that annual ransomware damages will skyrocket to $20 billion USD by 2022. Every year, ransomware generates an estimated $1 billion in revenue for cybercriminals.`}
            buttonText={"Learn more"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
