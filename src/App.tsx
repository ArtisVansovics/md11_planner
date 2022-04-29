import React, { useState } from 'react';
import './App.scss';
import Planner from './components/Planner/Planner';
import PlannerCheckbox from './components/PlannerCheckbox/PlannerCheckbox';

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
        {/* Basic planner */}
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <h1>1st Planner</h1>
              <br />
              <Planner />
            </div>
          </div>
        </div>
        {/* Planner with checkbox */}
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <h1>2nd Planner</h1>
              <br />
              <PlannerCheckbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
