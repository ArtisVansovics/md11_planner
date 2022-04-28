import React, { useState } from 'react';
import './Planner.scss';

const Planner = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([
    {
      title: 'Buy milk',
    },
  ]);
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
              done: false,
            };
            setTasks([...tasks, newTask]);
          }}
        >
          Add
        </button>
      </div>
      <div className="planner__item-box">
        <ul className="planner__list">
          {tasks.map((task) => (
            <li className="planner__item">{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Planner;
