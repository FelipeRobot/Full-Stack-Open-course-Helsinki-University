import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'
import Search from './components/searchComponent';
import Numbers from './components/NumberListComponent';
import Add_new from './components/add_new';

const App = () => {



  const [persons, setPersons] = useState();


  const [newName, setNewName] = useState('');

  const[newNumber, setNewNumber] = useState('');

  const[filtered_list, set_filtered_list] = useState([
    {}

  ])

  
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data); // Actualiza el estado con los datos
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  //Debug Debug


  const newNameHandler =(event)=>{
      
    event.preventDefault();
    setNewName(event.target.value);


  }
  const addPersonHandler = (event) =>{
    event.preventDefault();
  
    const newPerson ={
      name : newName,
      number : newNumber
    };


    persons.map(person =>(
      newName === person.name ? 
      alert(newName + ' is already added to the phonebook.') :
      setPersons([...persons, newPerson])
    ))

    setNewName('');
    setNewNumber('');


    /* Debug*/
    persons.forEach(person=>(
      console.log(person.name)
    ))
    
  }
  
  const setNumberHandler = (event) =>{
    event.preventDefault();

    setNewNumber(event.target.value);
  }



  return (
    <div>

      <div>
        <h2>Phonebook</h2>
        <Search
          persons ={persons}
          filtered_list = {filtered_list}
          set_filtered_list ={set_filtered_list}
        />

        <h3>Add a new</h3>
       
        <Add_new
          newName ={newName}
          newNumber = {newNumber}
          
          addPersonHandler = {addPersonHandler}
          setNumberHandler ={setNumberHandler}
          newNameHandler ={newNameHandler}
          
       />

        <h2>Numbers: </h2>
        <Numbers
          persons ={filtered_list}
        />


      </div>
      
      <div>debug: {newName}</div>

     

    </div>
  )
}

export default App