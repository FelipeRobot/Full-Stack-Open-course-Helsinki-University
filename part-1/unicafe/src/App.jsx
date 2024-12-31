import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () =>{
    
  }
  const neutralHandler = () =>{

  }
  const badHandler = () =>{

  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodHandler}>Good</button>
      <button onClick={neutralHandler}>neutral</button>
      <button onClick={badHandler}>bad</button>
      <h1>Statistics</h1>
    </div>
  )
}

export default App