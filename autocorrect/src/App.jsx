import React, { useState } from "react";
import './App.css';
import { ReactTyped } from "react-typed";
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';

const App = () => {
  const [lightMode, setLightMode] = useState(false);
  const [typedString, setTypedString] = useState(["> Autocorrector"]);
  const [showTyped, setShowTyped] = useState(true);

  const toggleLightMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return (
    <div className={lightMode ? "App-header-light" : "App-header-dark"}>
      {/* <header className={lightModeText ? "font-main-light" : "font-main-dark"}>
        Click on the "Autocorrect" to begin input text
      </header> */}
      <p className={lightMode ? "font-main-light" : "font-main-dark"}> 
        {showTyped ? 
          <span onClick={() => setShowTyped(false)}>
            <ReactTyped
              strings={typedString}
              typeSpeed={100}
              cursorChar="."
              showCursor={true}
              className={lightMode ? "font-main-light" : "font-main-dark"}
            />
          </span>
          : <>
              <input
                  type="text"
                  value={typedString}
                  onChange={(e) => setTypedString(e.target.value)}
                  className={lightMode ? "input-light" : "input-dark"}
                  autoFocus
                />
                <br />
              <button className="autocorrect-btn"> Auto-Correct </button>
            </>
          }
      </p>
      <div>
        <button onClick={toggleLightMode} className={lightMode ? "toggle-btn" : "toggle-btn"}>
          {lightMode ? <Brightness7RoundedIcon /> : <BedtimeRoundedIcon />}
        </button>
      </div>
    </div>
    
  );
};

export default App;
