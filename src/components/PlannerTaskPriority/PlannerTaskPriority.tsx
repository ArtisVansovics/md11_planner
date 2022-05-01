import React, { FC } from 'react';
import '../PlannerTask/PlannerTask.scss';

type PlannerTaskPriorityProps = {
  title: string
  isDone: boolean
  inEdit: boolean
  priority: string
  onClick: () => void
  eraseFn: () => void
  editFn: () => void
}

const PlannerTaskPriority:FC<PlannerTaskPriorityProps> = ({
  title, isDone, inEdit, priority, onClick, eraseFn, editFn,
}) => (
  <div className={`planner__task priority--${priority}`}>
    {!inEdit && (
    <div className="planner__task-info">
      <div className="planner__task-container">
        {(priority === 'high') && <div className={`priority-label priority-label--${priority}`}>HIGH PRIORITY</div>}
        {(priority === 'medium') && <div className={`priority-label priority-label--${priority}`}>MEDIUM PRIORITY</div>}
        {(priority === 'low') && <div className={`priority-label priority-label--${priority}`}>LOW PRIORITY</div>}
        <div className="planner__task-label">
          <input
            type="checkbox"
            className={`planner__checkbox ${isDone ? 'checked' : ''}`}
            checked={isDone}
            onChange={onClick}
          />
          <p className={`planner__task-title ${isDone ? 'checked-task' : ''}`}>
            {title}
          </p>
        </div>
      </div>
      <div className="planner__task-buttons">
        <button
          className="planner__task-btn"
          onClick={editFn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi bi-x-square-fil planner__btn-logo planner__logo-edit"
            viewBox="0 0 16 16"
          >

            <path
                  // eslint-disable-next-line max-len
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fillRule="evenodd"
                  // eslint-disable-next-line max-len
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </button>
        <button
          className="planner__task-btn"
          onClick={eraseFn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi bi-x-square-fil planner__btn-logo planner__logo-erase"
            viewBox="0 0 16 16"
          >
            <path
                  // eslint-disable-next-line max-len
              d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
    )}
  </div>
);

export default PlannerTaskPriority;
