import React, { FC } from 'react';
import './TaskCard.scss';

type TaskCardProps = {
  title: string
  isDone: boolean
}

const TaskCard:FC<TaskCardProps> = ({
  title, isDone,
}) => (
  <div className="task-card">
    <p className="task-card__title">
      {title}
    </p>
  </div>
);
export default TaskCard;
