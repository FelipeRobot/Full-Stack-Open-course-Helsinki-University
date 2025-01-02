import { useState } from 'react'

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let anecdotesJSON={};

  for(let i = 0; i<anecdotes.length; i++ ){
    anecdotesJSON[anecdotes[i]] =0;
  }
  
  console.log('Test: '+ anecdotesJSON[anecdotes[0]]);

  const [selected, setSelected] = useState(0)


  const anecdotesButtonHandler = ()=>{
    setSelected(selected+1);
  };
  
  const voteThis =()=>{
    anecdotesJSON[anecdotes[selected]]++;
    console.log(JSON.stringify(anecdotesJSON, null, 2));

  }
  
  //No se está mostrando bien el número de votos
  return (
    <div>
      {anecdotes[selected]}
      <div>
        Votes for this anecdote: {anecdotesJSON[anecdotes[selected]]} 
      </div>
      
      <div>
        <button onClick={anecdotesButtonHandler}>Next anecdote</button>
        <button onClick={voteThis}>Vote this anecdote</button>
      </div>
      
    </div>

  )
}

export default App