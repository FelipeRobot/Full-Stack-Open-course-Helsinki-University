const App = () => {
   

  return (

    /*----------------------------- */
    <div>
    <Header />
     <Content />
    <Total  />
    </div>



  )
}

const Header = () => {
  // const-definitions
  const course = 'Half Stack application development'

  return (
    <div>
      <hi>{course}</hi>
    </div>
  )
}

const Content  = () => {
  // const-definitions
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  const part2 = 'Using props to pass data'
  const exercises2 = 7

  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <p>
        {part1} {exercises1}
     </p>

      <p>
        {part1} {exercises1}
      </p>

      <p>
        {part2} {exercises2}
      </p>

      <p>
        {part3} {exercises3}
      </p>

    </div>
  )
}

const Total = () => {
  // const-definitions
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}



export default App