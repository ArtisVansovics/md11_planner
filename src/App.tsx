import React, { useState } from 'react';
import './App.scss';
import Planner from './components/Planner/Planner';
import PlannerCheckbox from './components/PlannerCheckbox/PlannerCheckbox';
import PlannerDelete from './components/PlannerDelete/PlannerDelete';
import PlannerEdit from './components/PlannerEdit/PlannerEdit';
import PlannerPriority from './components/PlannerPriority/PlannerPriority';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode && 'dark-mode'}`}>
      <div className="container">
        {/* Dark mode toggle */}
        <div className="row end-xs">
          <div className="col-xs-12 col-sm-4">
            <div className="box">
              <button
                className="dark-mode__toggle"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {`Switch to ${darkMode ? 'Light Mode' : 'Dark Mode'}`}
              </button>
            </div>
          </div>
        </div>
        <div className="row center-xs">
          {/* Basic planner */}
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <h1>1st Planner</h1>
              <br />
              <Planner />
            </div>
          </div>
          {/* Planner with checkbox */}
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <h1>2nd Planner</h1>
              <br />
              <PlannerCheckbox />
            </div>
          </div>
          {/* Planner with option to delete tasks */}
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <h1>3rd Planner</h1>
              <br />
              <PlannerDelete />
            </div>
          </div>
          {/* Planner with option to edit tasks */}
          <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="box">
              <h1>4th Planner</h1>
              <br />
              <PlannerEdit />
            </div>
          </div>
          {/* Planner with option to set task priority */}
          <div className="col-xs-12 col-sm-8 col-md-6">
            <div className="box">
              <h1>Final Planner</h1>
              <br />
              <PlannerPriority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
