import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import HookApp from './HookApp'
// import CounterApp from './01-useState/CounterApp'
import CounterWCustonHook from './01-useState/CounterWCustonHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    <CounterWCustonHook />
  </React.StrictMode>,
)
