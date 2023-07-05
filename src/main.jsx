import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import HookApp from './HookApp'
// import CounterApp from './01-useState/CounterApp'
// import CounterWCustonHook from './01-useState/CounterWCustonHook'
// import SimpleForm from './01-useState/02-useEffect/SimpleForm'
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < MultipleCustomHooks />
  </React.StrictMode>
)
