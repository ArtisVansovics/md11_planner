import React, { useState } from 'react';
import './App.scss';
import InputBox from './components/InputBox/InputBox';

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
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <InputBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
