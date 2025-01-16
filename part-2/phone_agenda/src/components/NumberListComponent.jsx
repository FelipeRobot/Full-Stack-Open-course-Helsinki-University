

const Numbers = (props) =>{

    const {persons} = props
        

    return(
        <div>
            <div
                key={persons.name}
            >       
                {persons.map(person =>(
                    <p
                        key={person.name}
                    >{person.name} - {person.number}</p>
                ))}

            </div>
            
        </div>
    )

}

export default Numbers