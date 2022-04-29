import React, { FC } from 'react';
import './PlannerTask.scss';

type PlannerTaskProps = {
  title: string
  isDone: boolean
  onClick: () => void
}

const PlannerTask:FC<PlannerTaskProps> = ({
  title, isDone, onClick,
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
  </div>
);
export default PlannerTask;
