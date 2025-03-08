import { deletePerson } from "../Services/personServides";

export const deletePersonHandler = async (person)=>{
    
    const confirmDelete = window.confirm('Está seguro que desea borrar al contacto?');

    if(confirmDelete){
        try{
            await deletePerson(person);
            alert('Contacto elliminado.');
            
        }catch(error){
            alert('Error eliminando al contacto.');
            console.error('Error deleting the register: ', error);
        }
    }

}