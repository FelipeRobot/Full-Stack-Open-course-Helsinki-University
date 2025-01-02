import { useState } from 'react'


const StatisticLine =({text, value})=>{

  return(
       <p>{text}: {value}</p>

  )
}

const StatisticsAsTable =({ good, neutral, bad })=>{
  console.log('Displaying as Table');

  const findTotal =() =>{
    return good + neutral + bad;
  }
  
  const findAverage= ()=>{
    return (good + neutral + bad)/good;
  }

  const displayGoodPercentaga =()=>{
    let result = good*100/(good + neutral + bad)
    
    return result + '%';
  }

  if(findTotal()>0){

    return(
      <div>
       <table>

            <tbody>
              <tr>
                <td>Good</td>
                <td>{good}</td>                      
              </tr>
              
              <tr>
                <td>Neutral</td>
                <td>{neutral}</td>
              </tr>

              <tr>
                <td>Bad</td>
                <td>{bad}</td>
              </tr>

              <tr>
                <td>Total</td>  
                <td>{findTotal()}</td>
              </tr>

              <tr>
                <td>Average</td>  
                <td>{findAverage()}</td>
              </tr>
              <tr>
                <td>percentage</td>  
                <td>{displayGoodPercentaga()}</td>
              </tr>
            </tbody>

       </table>
      </div>
    )
  }else{

    return(
      <div>
       <p>No given feedback</p>
    </div>
  
    )    
  }
}

const Statistics = ({ good, neutral, bad })=>{
  console.log('Displaying as StatisticsLine');
  const findTotal =() =>{
    return good + neutral + bad;
  }
  
  const findAverage= ()=>{
    return (good + neutral + bad)/good;
  }

  const displayGoodPercentaga =()=>{
    let result = good*100/(good + neutral + bad)
    
    return result + '%';
  }

  if(findTotal()>0){

    return(
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="Total" value={findTotal()}/>
        
        <StatisticLine text="Average" value = {findAverage()} />
        <StatisticLine text="Good percentage" value ={displayGoodPercentaga()} />
      </div>
    )
  }else{
    return(
      <div>
       <p>No given feedback</p>
    </div>
  
    )
  }
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [displayTable, setTable] = useState(0);

  const goodHandler = () =>{
    setGood(good +1);
  }
  const neutralHandler = () =>{
    setNeutral(neutral+1);
  }
  const badHandler = () =>{
    setBad(bad+1);
  }

  const displayTableHandler= () =>{
    setTable(displayTable ? 0:1);
    
  }

    return (
      <div>
        <h1>Give Feedback</h1>
  
        <button onClick={goodHandler}>Good</button>
        <button onClick={neutralHandler}>neutral</button>
        <button onClick={badHandler}>bad</button>
        <div>
          <button onClick={displayTableHandler}>Display</button>
        </div>

        <h1>Statistics</h1>

       {displayTable?(
          <StatisticsAsTable
            good ={good}
            neutral = {neutral}
            bad = {bad}
          />
        ):(
          <Statistics
            good ={good}
            neutral = {neutral}
            bad = {bad}
          />
        )}

      </div>
    )

  
}

export default App