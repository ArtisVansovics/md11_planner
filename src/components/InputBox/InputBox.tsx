import React, { useState } from 'react';
import './InputBox.scss';
// import TaskCard from '../TaskCard/TaskCard';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([
    {
      title: 'Buy milk',
      done: false,
    },
  ]);
  // const handleEdit = (index:number) => {
  //   const newTasks = [...tasks];
  //   newTasks[index].done = true;
  //   setTasks(newTasks);
  // };

  return (
    <div className="input-container">
      <div className="input-box">
        <input
          type="text"
          className="input"
          placeholder="New task"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="input-btn"
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
      {/* <div className="task-list"> */}
      {/*   {tasks.map((task, index) => ( */}
      {/*     <TaskCard title={task.title} isDone={task.done} /> */}
      {/*   ))} */}
      {/* </div> */}
    </div>
  );
};

// export default InputBox;
