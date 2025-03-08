import axios from 'axios';

const API_URL = 'http://localhost:3001/persons';


export const createPerson = async (newPerson) =>{
    try{
        const response = await axios.post(API_URL, newPerson);
        return response;

    }catch(error){
        console.error('Error creating new contact: ', error);
    }

}


export const deletePerson = async(person) =>{
    try{

        const target = API_URL + '/' + person.id;

        console.log('URL: ', target )
        const response = await axios.delete(target);
        console.log('Response status:  ',response.status);

        return response;        
    }catch(error){
        console.error('Error deleting the current register: ', error);
    }
}