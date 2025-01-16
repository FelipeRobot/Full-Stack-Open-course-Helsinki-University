

const Search = (props) =>{
    
    
    const persons = props.persons;    
    const filtered_list = props.filtered_list;
    const set_filtered_list = props.set_filtered_list;

    
    const search_handler =(event)=>{
        event.preventDefault();




        persons.map(person=>(
            console.log(person.name)
        ))
        let newFilteredList;
        const search_value = event.target.value.toLowerCase();

        if(search_value == null){
            newFilteredList = persons;
        }else{
            newFilteredList = persons.filter(person => 
                person.name.toLowerCase().includes(search_value)
            );
        }


       

        set_filtered_list(newFilteredList);


        filtered_list.map(person=>(

                console.log(person.name)

            )
            
        )

    }


    return(
        <div>
            Search: 
            
            <input
                onChange={search_handler}        
            />


        </div>
    )
}

export default Search