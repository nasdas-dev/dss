import React from "react";

function QuestionCard({ key, data }) {
  return (
    <div className="card card-body h-full shadow-md mt-10 p-10">
      <div className="card lg:card-side card-bordered h-4/6">
        <div className="card-body">
          <h2 className="card-title">{data.topic}</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div className="card-actions">
            <div className="p-10 card bg-base-200">
              <div className="p-6 card bordered">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">1 - Primary </span>
                    <input
                      type="radio"
                      name={`${key}`}
                      checked="checked"
                      className="radio radio-primary"
                      value=""
                    />
                  </label>
                  <label className="cursor-pointer label">
                    <span className="label-text">2 - Primary </span>
                    <input
                      type="radio"
                      name={`${key}`}
                      checked="checked"
                      className="radio radio-primary"
                      value=""
                    />
                  </label>
                  <label className="cursor-pointer label">
                    <span className="label-text">3 - Primary </span>
                    <input
                      type="radio"
                      name={`${key}`}
                      checked="checked"
                      className="radio radio-primary"
                      value=""
                    />
                  </label>
                  <label className="cursor-pointer label">
                    <span className="label-text">4 - Primary </span>
                    <input
                      type="radio"
                      name={`${key}`}
                      checked="checked"
                      className="radio radio-primary"
                      value=""
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
