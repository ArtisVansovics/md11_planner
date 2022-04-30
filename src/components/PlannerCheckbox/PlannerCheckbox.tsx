import React, { useState } from 'react';
import '../Planner/Planner.scss';
import PlannerTask from '../PlannerTask/PlannerTask';
import Button from '../Button/Button';

type tasksProps = {
  title: string
  isDone: boolean
}

const PlannerCheckbox = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [currentTasks, setCurrentTasks] = useState<tasksProps[]>([]);

  const taskButtons = [
    {
      title: 'All',
      onClick: () => {
        setCurrentTasks([...tasks]);
      },
    },
    {
      title: 'In progress',
      onClick: () => {
        const newTasks = [...tasks];
        setCurrentTasks(newTasks
          .filter((task) => !task.isDone));
      },
    },
    {
      title: 'Completed',
      onClick: () => {
        const newTasks = [...tasks];
        setCurrentTasks(newTasks.filter((task) => task.isDone));
      },
    },
  ];

  const checkThisBox = (index:number) => {
    const newTasks = [...currentTasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setCurrentTasks(newTasks);
  };
  const percentageDone = () => {
    const doneTasks = tasks.filter((task) => task.isDone);
    return (doneTasks.length / tasks.length) * 100;
  };

  return (
    <div className="planner">
      <div className="planner__row">
        <input
          type="text"
          className="planner__input"
          placeholder="Add new task..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="planner__btn"
          onClick={() => {
            const newTask = {
              title: inputValue,
              isDone: false,
            };
            setTasks([...tasks, newTask]);
            setCurrentTasks([...tasks, newTask]);
            setInputValue('');
          }}
        >
          Add
        </button>
      </div>
      <div className="planner__progressbar">
        <div className="planner__progress" style={{ width: `${percentageDone()}%` }} />
      </div>
      <div className="planner__task-list">
        {currentTasks.map((task, index) => (
          <PlannerTask
            title={task.title}
            isDone={task.isDone}
            onClick={() => checkThisBox(index)}
            key={Math.random()}
          />
        ))}
      </div>
      <div className="planner__row">
        {taskButtons.map((taskButton) => (
          <Button
            title={taskButton.title}
            onClick={taskButton.onClick}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};

export default PlannerCheckbox;
