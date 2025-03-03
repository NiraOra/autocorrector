import React, { useState } from "react";
import './App.css';
import { ReactTyped } from "react-typed";
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';



const App = () => {
  const [lightMode, setLightMode] = useState(false);
  const [lightModeText, setLightModeText] = useState(false);
  const [lightModeBtn, setLightModeBtn] = useState(false);
  const [lightModeHover, setLightModeHover] = useState(false);
  const [typedString, setTypedString] = useState(["> Autocorrector.."]);

  const toggleLightMode = () => {
    setLightMode((prevMode) => !prevMode);
    setLightModeText((prevMode) => !prevMode);
    setLightModeBtn((prevMode) => !prevMode);
    setLightModeHover((prevMode) => !prevMode);
  };

  return (
    <div className={lightMode ? "App-header-light" : "App-header-dark"}>
      <p className={lightModeText ? "font-main-light" : "font-main-dark"}> 
        <ReactTyped
          strings={typedString}
          typeSpeed={100}
          cursorChar="."
          showCursor={true}
          className={lightModeHover ? "typed-text-light" : "typed-text-dark"}
        />
      </p>
      <div>
        <button onClick={toggleLightMode} className={lightModeBtn ? "toggle-btn" : "toggle-btn"}>
          {lightMode ? <Brightness7RoundedIcon /> : <BedtimeRoundedIcon />}
        </button>
      </div>
    </div>
    
  );
};

export default App;
