const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  course.parts.forEach(element => {
    console.log(element); 
  });



  return (

    /*----------------------------- */
    <div>
     <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
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

const Content  = ({parts}) => {
  // const-definitions
  
  return (
    <div>
      <p>
        {parts[0].name} {parts[0].exercises}
     </p>

      <p>
        {parts[1].name} {parts[1].exercises}
      </p>

      <p>
      {parts[2].name} {parts[2].exercises}
      </p>

    </div>
  )
}

const Total = ({parts}) => {
  
  return (
    <div>
      <p>Number of exercises {parts[0].exercises +parts[1].exercises+parts[2].exercises}</p>
    </div>
  )
}



export default App