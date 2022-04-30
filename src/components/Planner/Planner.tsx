import React, { useState } from 'react';
import './Planner.scss';

type tasksProps = {
  title: string
}

const Planner = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<tasksProps[]>([]);
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
            };
            setTasks([...tasks, newTask]);
          }}
        >
          Add
        </button>
      </div>
      <div className="planner__task-list">
        <ul className="planner__list">
          {tasks.map((task) => (
            <li className="planner__item" key={Math.random()}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Planner;
