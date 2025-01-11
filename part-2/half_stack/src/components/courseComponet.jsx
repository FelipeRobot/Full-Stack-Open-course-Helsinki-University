const Course = (props) =>{

    const {course} = props
  
    let totalExercises = course[0].parts.reduce((sum, part) => sum + part.exercises, 0);
    
    console.log(course.name);
  
    return(
      <div>
        <div>
  
          {course.map(course=>
            <div key= {course.id}>
              <b>{course.name}</b>
            
              {course.parts.map(parts =>
  
                <div key={parts.id}>
                  <p>{parts.name + ' '} <b>{parts.exercises} </b></p>
                  
                </div>
  
              )}
            </div>
  
          )}
  
        </div>
  
        <div>
          <b>Total exercises </b>
          {totalExercises}        
        </div>
        
      </div>
    )
  
  }

export default Course  