import { useState } from 'react'
import logo from './pacis.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello I am Nkubito Pacis!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Click Me And Let Me Count: {count}
          </button>
        </p>
      
      </header>
    </div>
  )
}

export default App
