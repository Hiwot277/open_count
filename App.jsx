import { useState } from 'react'
 import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="card">
        <button className="count" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
         <button className="reset" onClick={() => setCount((count) => 0
        )}>
          reset
        </button>
       
      </div>
     
    </>
  )
}

export default App
