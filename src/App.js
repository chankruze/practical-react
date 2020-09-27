import React from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import IconsContainer from './components/IconsContainer'
import ToastNotificationContainer from './components/ToastNotificationContainer'
import ModalContainer from './components/ModalContainer'
import TooltipContainer from './components/TooltipContainer'

const ICON_CONTEXT = {
  color: 'blue',
  size: '5rem'
}

function App() {
  return (
    <IconContext.Provider value={ICON_CONTEXT}>
      <div className="App">
        {/* Icons */}
        <IconsContainer />
        {/* Toast Notifications */}
        <ToastNotificationContainer />
        {/* Modal Container */}
        <ModalContainer />
        {/* Tooltip Container */}
        <TooltipContainer/>
      </div>
    </IconContext.Provider>
  );
}

export default App;
