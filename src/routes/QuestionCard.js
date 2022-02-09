import React from "react";

function QuestionCard({ key, data }) {
  return (
    <div className="card card-body h-full shadow-md mt-10 p-10">
      <div class="card lg:card-side card-bordered h-4/6">
        <div class="card-body">
          <h2 class="card-title">{data.topic}</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div class="card-actions">
            <div class="p-10 card bg-base-200">
              <div class="p-6 card bordered">
                <div class="form-control">
                  <label class="cursor-pointer label">
                    <span class="label-text">1 - Primary </span>
                    <input
                      type="radio"
                      name={`${key}`}
                      checked="checked"
                      class="radio radio-primary"
                      value=""
                    />
                  </label>
                  <label class="cursor-pointer label">
                    <span class="label-text">2 - Primary </span>
                    <input
                      type="radio"
                      name={`${key}`}
                      checked="checked"
                      class="radio radio-primary"
                      value=""
                    />
                  </label>
                  <label class="cursor-pointer label">
                    <span class="label-text">3 - Primary </span>
                    <input
                      type="radio"
                      name={`${key}`}
                      checked="checked"
                      class="radio radio-primary"
                      value=""
                    />
                  </label>
                  <label class="cursor-pointer label">
                    <span class="label-text">4 - Primary </span>
                    <input
                      type="radio"
                      name={`${key}`}
                      checked="checked"
                      class="radio radio-primary"
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
