import React from "react";
import "./App.css";
import { IconContext } from "react-icons";
// import IconsContainer from "./components/IconsContainer";
// import ToastNotificationContainer from "./components/ToastNotificationContainer";
// import ModalContainer from "./components/ModalContainer";
// import TooltipContainer from "./components/TooltipContainer";
// import CountUpContainer from "./components/CountUpContainer";
// import IdleTimerContainer from "./components/IdleTimerContainer";
// import ColorPicker from "./components/ColorPicker";
// import CreditCard from "./components/CreditCard";
// import DatePickerComp from "./components/DatePickerComp";
import VideoPlayerComp from "./VideoPlayerComp";

const ICON_CONTEXT = {
  color: "blue",
  size: "5rem",
};

function App() {
  return (
    <IconContext.Provider value={ICON_CONTEXT}>
      <div className="App">
        {/* Icons */}
        {/* <IconsContainer /> */}
        {/* Toast Notifications */}
        {/* <ToastNotificationContainer /> */}
        {/* Modal Container */}
        {/* <ModalContainer /> */}
        {/* Tooltip Container */}
        {/* <TooltipContainer /> */}
        {/* CountUp Container */}
        {/* <CountUpContainer /> */}
        {/* Idle Timer Container */}
        {/* <IdleTimerContainer /> */}
        {/* Color Picker */}
        {/* <ColorPicker /> */}
        {/* Credit Card UI */}
        {/* <CreditCard /> */}
        {/* Date Picker */}
        {/* <DatePickerComp /> */}
        <VideoPlayerComp />
      </div>
    </IconContext.Provider>
  );
}

export default App;
