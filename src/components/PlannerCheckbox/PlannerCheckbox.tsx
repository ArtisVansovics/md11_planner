import React, { useState } from 'react';
import '../Planner/Planner.scss';
import PlannerTask from '../PlannerTask/PlannerTask';

const PlannerCheckbox = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([
    {
      title: 'Buy milk',
      isDone: false,
    },
  ]);
  const checkThisBox = (index:number) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };

  return (
    <div className="planner">
      <div className="planner__top-row">
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
          }}
        >
          Add
        </button>
      </div>
      <div className="planner__task-list">
        {tasks.map((task, index) => (
          <PlannerTask
            title={task.title}
            isDone={task.isDone}
            onClick={() => checkThisBox(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlannerCheckbox;
