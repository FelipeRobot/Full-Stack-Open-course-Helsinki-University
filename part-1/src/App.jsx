const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (

    /*----------------------------- */
    <div>
    <Header 
      course={course}
    />
     <Content 
      part1={part1.name}
      part2={part2.name}
      part3={part3.name}
      
      exercises1={part1.exercises}
      exercises2={part2.exercises}
      exercises3={part3.exercises}
     />
    <Total  />
    </div>


  )
}

const Header = ({course}) => {
  // const-definitions


  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content  = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  // const-definitions
  
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