import React, { useState } from 'react';
import '../Planner/Planner.scss';
import PlannerTaskDelete from '../PlannerTaskDelete/PlannerTaskDelete';
import Button from '../Button/Button';

type tasksProps = {
  title: string
  isDone: boolean
}

const PlannerDelete = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [visibleTasks, setVisibleTasks] = useState<tasksProps[]>([]);

  const taskButtons = [
    {
      title: 'All',
      onClick: () => {
        setVisibleTasks([...tasks]);
      },
    },
    {
      title: 'In progress',
      onClick: () => {
        const newTasks = [...tasks];
        setVisibleTasks(newTasks
          .filter((task) => !task.isDone));
      },
    },
    {
      title: 'Completed',
      onClick: () => {
        const newTasks = [...tasks];
        setVisibleTasks(newTasks
          .filter((task) => task.isDone));
      },
    },
  ];

  const checkThisBox = (index:number) => {
    const newTasks = [...visibleTasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setVisibleTasks(newTasks);
  };
  const eraseTask = (index:number) => {
    let newTasks = [...tasks];
    newTasks = newTasks.slice(0, index).concat(newTasks.slice(index + 1));
    setTasks(newTasks);
    setVisibleTasks(newTasks);
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
            setVisibleTasks([...tasks, newTask]);
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
        {visibleTasks.map((task, index) => (
          <PlannerTaskDelete
            title={task.title}
            isDone={task.isDone}
            onClick={() => checkThisBox(index)}
            eraseFn={() => eraseTask(index)}
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

export default PlannerDelete;
