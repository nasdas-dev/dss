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
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Answer</span>
                </label>
                <input type="text" placeholder="Answer" class="input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
