import React, { useState } from 'react';
import '../Planner/Planner.scss';
import PlannerTaskEdit from '../PlannerTaskEdit/PlannerTaskEdit';
import Button from '../Button/Button';

type tasksProps = {
  title: string
  isDone: boolean
  inEdit: boolean
}

const PlannerEdit = () => {
  const [inputValue, setInputValue] = useState('');
  const [editValue, setEditValue] = useState('');
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
  const editTaskToggle = (index:number) => {
    const newTasks = [...visibleTasks];
    newTasks[index].inEdit = true;
    setEditValue(newTasks[index].title);
    setVisibleTasks(newTasks);
  };
  const saveTaskEdit = (index:number) => {
    const newTasks = [...visibleTasks];
    newTasks[index].title = editValue;
    newTasks[index].inEdit = false;
    setVisibleTasks(newTasks);
    setEditValue('');
  };
  const cancelTaskEdit = (index:number) => {
    const newTasks = [...visibleTasks];
    newTasks[index].title = tasks[index].title;
    newTasks[index].inEdit = false;
    setVisibleTasks(newTasks);
    setEditValue('');
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
              inEdit: false,
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
          task.inEdit ? (
            <div className="planner__task">
              <div className="planner__task-info">
                <input
                  type="text"
                  className="planner__edit-input"
                  value={editValue}
                  onChange={(e) => {
                    setEditValue(e.target.value);
                  }}
                />
                <button
                  className="planner__btn planner__btn-edit"
                  onClick={() => saveTaskEdit(index)}
                >
                  Save
                </button>
                <button
                  className="planner__btn planner__btn-edit"
                  onClick={() => cancelTaskEdit(index)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )
            : (
              <PlannerTaskEdit
                key={Math.random()}
                title={task.title}
                isDone={task.isDone}
                inEdit={task.inEdit}
                onClick={() => checkThisBox(index)}
                eraseFn={() => eraseTask(index)}
                editFn={() => editTaskToggle(index)}
              />
            )
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

export default PlannerEdit;
