import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Baz, Foo } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Baz />
    <Foo />
  </React.StrictMode>
)
