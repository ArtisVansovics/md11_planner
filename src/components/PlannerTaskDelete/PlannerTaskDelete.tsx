import React, { FC } from 'react';
import '../PlannerTask/PlannerTask.scss';

type PlannerTaskDeleteProps = {
  title: string
  isDone: boolean
  onClick: () => void
  eraseFn: () => void
}

const PlannerTaskDelete:FC<PlannerTaskDeleteProps> = ({
  title, isDone, onClick, eraseFn,
}) => (
  <div className="planner__task">
    <input
      type="checkbox"
      className={`planner__checkbox ${isDone ? 'checked' : ''}`}
      checked={isDone}
      onChange={onClick}
    />
    <p className={`planner__task-title ${isDone ? 'checked-task' : ''}`}>
      {title}
    </p>
    <button
      className="planner__delete-btn"
      onClick={eraseFn}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bi bi-x-square-fil planner__delete-logo"
        viewBox="0 0 16 16"
      >
        <path
          // eslint-disable-next-line max-len
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
        />
      </svg>
    </button>
  </div>
);
export default PlannerTaskDelete;
