import { useState } from 'react'
import './App.css'
import { Button, Login } from './components/ui/button'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex min-h-screen">
      {/* Left side - Logo */}
      <div className="w-1/2 flex items-center justify-center bg-blue-100">
        <div className="text-center">
          <img 
            src="/Users/kendrickannoh-sarpong/Documents" 
            alt="Company Logo" 
            className="mx-auto w-64 h-64 object-contain"
          />
          <h1 className="text-3xl font-bold mt-4 text-blue-900">MediVisuals</h1>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-px bg-blue-300"></div>

      {/* Right side - Login */}
      <div className="w-1/2 flex items-center justify-center bg-blue-900">
        <Login />
      </div>

      {/* Hidden counter button for demonstration */}
      <div className="hidden">
        <p>Button Click Counter: {count}</p>
        <Button onClick={() => setCount(count + 1)}> Click me</Button>
      </div>
    </div>
  )
}

export default App