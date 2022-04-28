import React, { FC } from 'react';
import './TaskCard.scss';
import Button from '../Button/Button';

type TaskCardProps = {
  title: string
  isDone: boolean
  // isBeingEdited: boolean
  // priority: number
}

const TaskCard:FC<TaskCardProps> = ({
  title, isDone,
}) => {
  const a = 0;
  const cardButtons = [
    {
      title: 'Mark as done',
      onClick: () => {

      },
    },
    {
      title: 'Edit',
      onClick: () => {

      },
    },
    {
      title: 'Delete',
      onClick: () => {

      },
    },
  ];

  return (
    <div className="task-card">
      <p className="task-card__title">
        {title}
      </p>
    </div>
  );
};
export default TaskCard;
