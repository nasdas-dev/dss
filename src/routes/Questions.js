import React from "react";
import QuestionCard from "../components/QuestionCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import DataService from "../services/DataService";

function Questions(props) {
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState([]);
  let navigate = useNavigate();

  const incStep = 100 / questions.length;
  const increment = () => setProgress(progress + incStep);

  useEffect(() => {
    DataService.getRequest("/api/v1/questions")
      .then(async (res) => {
        if (!res.ok) {
          // Show error message and reset login form
          const error = await res.json();
        } else {
          const questions = await res.json();
          setQuestions(questions.sort((a, b) => a.id - b.id));
        }
      })
      .catch((err) => {
        if (err.message.match(/Failed to fetch/)) {
          alert("The server cannot be reached. Did you start it?");
        } else {
          alert(`Something went wrong during the login: ${err.message}`);
        }
      });
  }, []);

  useEffect(() => {
    let bar = progress / 10;
    Math.floor(bar);
    for (let i = 0; i < bar; i++) {
      document
        .querySelectorAll(".progress-bar")
        [i].classList.add("step-success");
    }
  }, [progress]);

  function submit(e) {
    e.preventDefault();

    DataService.postRequest("/api/v1/assessment", {
      answers: answers,
    })
      .then(async (res) => {
        if (!res.ok) {
          // Show error message and reset login form
          const error = await res.json();
        } else {
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

  const ar = Array(10).fill(0);
  return (
    <div>
      <ul className="fixed menu m-10 border bg-base-300 rounded-box top-0 right-0 h-16 w-16 items-center z-50">
        <li className="">
          <Link to="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </li>
      </ul>
      <div className="flex-container flex-col">
        <ul className="flex-auto fixed steps steps-vertical w-1/6 p-20 m-20">
          {ar.map((el, i) => (
            <li key={i} id={`${i + 1}`} className="step progress-bar"></li>
          ))}
        </ul>
        <div className="ml-96 flex-auto w-4/6 h-1/4">
          {console.log(questions)}
          {questions.map((element, i) => (
            <QuestionCard
              key={i}
              data={element}
              increment={increment}
              answers={answers}
              setAnswers={setAnswers}
            />
          ))}
          <button
            className="btn btn-success p-5 h-52 w-full text-4xl btn-outline mt-72 mb-72"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
