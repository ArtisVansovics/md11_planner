import React, { useState } from 'react';
import '../Planner/Planner.scss';
import PlannerTaskPriority from '../PlannerTaskPriority/PlannerTaskPriority';
import Button from '../Button/Button';

type tasksProps = {
  title: string
  isDone: boolean
  inEdit: boolean
  priority: string
}

const PlannerPriority = () => {
  const [inputValue, setInputValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [visibleTasks, setVisibleTasks] = useState<tasksProps[]>([]);
  const [taskPriority, setTaskPriority] = useState('');

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
    {
      title: 'HIGH PRIORITY',
      onClick: () => {
        const newTasks = [...tasks];
        setVisibleTasks(newTasks
          .filter((task) => task.priority === 'high'));
      },
    },
    {
      title: 'MEDIUM PRIORITY',
      onClick: () => {
        const newTasks = [...tasks];
        setVisibleTasks(newTasks
          .filter((task) => task.priority === 'medium'));
      },
    },
    {
      title: 'LOW PRIORITY',
      onClick: () => {
        const newTasks = [...tasks];
        setVisibleTasks(newTasks
          .filter((task) => task.priority === 'low'));
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
        <div className="priority-selection">
          <p className="priority-selection__label">Priority</p>
          <select className="priority-selection__drop-down">
            <option
              onClick={() => {
                setTaskPriority('high');
              }}
            >
              High
            </option>
            <option
              onClick={() => {
                setTaskPriority('medium');
              }}
            >
              Medium
            </option>
            <option
              onClick={() => {
                setTaskPriority('');
              }}
            >
              Low
            </option>
          </select>
        </div>
        <button
          className="planner__btn"
          onClick={() => {
            const newTask = {
              title: inputValue,
              isDone: false,
              inEdit: false,
              priority: taskPriority,
            };
            setTasks([...tasks, newTask]);
            setVisibleTasks([...tasks, newTask]);
            setInputValue('');
            setTaskPriority('high');
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
            <div className={`planner__task priority--${task.priority}`}>
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
              <PlannerTaskPriority
                key={Math.random()}
                title={task.title}
                isDone={task.isDone}
                inEdit={task.inEdit}
                priority={task.priority}
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

export default PlannerPriority;
