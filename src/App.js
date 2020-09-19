import React from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import IconsContainer from './components/IconsContainer'
import ToastNotificationContainer from './components/ToastNotificationContainer'

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
        <ToastNotificationContainer/>
      </div>
    </IconContext.Provider>
  );
}

export default App;
