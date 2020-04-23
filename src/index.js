import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Synth from './Synth'
import SynthContext from './SynthContext'

ReactDOM.render(
  <React.StrictMode>
    <SynthContext.Provider value={new Synth(13)}>
      <App />
    </SynthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
