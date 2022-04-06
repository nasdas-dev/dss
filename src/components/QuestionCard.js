import React, { useState } from "react";
import { empty } from "rxjs";

function QuestionCard({ lkey, data, increment, answers, setAnswers }) {
  let questionObject = {};
  let answersInObject = {};
  for (let i = 0; i < data.answers.length; i++) {
    answersInObject[i] = false;
  }
  questionObject[data.id] = answersInObject;

  const MC = Symbol("mc");
  const SC = Symbol("sc");
  const FF = Symbol("ff");
  const [qAnswer, setqAnswer] = useState(questionObject);
  const [clicked, setClicked] = useState(false);

  function onChange(qId, radioId, symbol) {
    if (!clicked) {
      setClicked(true);
      increment();
    }

    switch (symbol) {
      case MC:
        let mc_ans = { ...qAnswer };
        mc_ans[qId][radioId] = !mc_ans[qId][radioId];
        setqAnswer(mc_ans);
        break;
      case SC:
        let sc_ans = questionObject;
        sc_ans[qId][radioId] = true;
        setqAnswer(sc_ans);
        break;
      case FF:
        let ff_ans = questionObject;
        ff_ans[qId][0] = radioId;
        setqAnswer(ff_ans);
        break;
    }

    setAnswers({ ...answers, ...qAnswer });
  }

  return (
    <div key={lkey} className="card card-body h-full shadow-md mt-10 p-10">
      <div className="card lg:card-side card-bordered h-4/6">
        <div className="card-body">
          <h2 className="card-title">{data.question}</h2>
          <div className="card-actions">
            <div className="p-10 card bg-base-200">
              <div className="p-6 card bordered">
                {data.answerType === "MC" || data.answerType === "FF" ? (
                  data.answerType === "MC" ? (
                    data.answers.map((element, i) => (
                      // multiple choice
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text m-5">
                            {element[i + 1]}
                          </span>
                          <input
                            type="checkbox"
                            className="checkbox checkbox-primary"
                            key={i}
                            onChange={(e) => onChange(data.id, i, MC)}
                          />
                        </label>
                      </div>
                    ))
                  ) : (
                    <>
                      <input
                        // free form text
                        key={lkey}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full max-w-xs"
                        onChange={(e) => onChange(data.id, e.target.value, FF)}
                      />
                      <button className="btn btn-primary btn-outline mt-5">
                        +
                      </button>
                    </>
                  )
                ) : (
                  // single choice
                  <form key={lkey} className="form-control">
                    {data.answers.map((element, i) => (
                      <label key={i} className="label cursor-pointer">
                        <span className="label-text m-5">{element[i + 1]}</span>
                        <input
                          key={i}
                          type="radio"
                          name="radio"
                          className="radio checked:bg-primary"
                          onChange={(e) => onChange(data.id, i, SC)}
                        />
                      </label>
                    ))}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
