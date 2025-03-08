import { deletePersonHandler } from "../utils/deleteContact"

const Numbers = (props) =>{

    const {persons} = props
        

    return(
        <div>
            <div
                key={persons.name}
            >       
                {persons.map(person =>(
                <div
                key={person.name}
                >
                    <p>
                        {person.name} - {person.number}
                    </p>
                    <button
                        onClick={()=>deletePersonHandler(person)}
                        >
                        delete
                        </button>
                </div>
                

                ))}
                
            </div>
            
        </div>
    )

}

export default Numbers