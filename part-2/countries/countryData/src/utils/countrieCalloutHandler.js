
import { fetch_all_countries } from "../services/countries"

export const fetch_all_countries_handler = async ()=>{
 try{
    const response = await fetch_all_countries();
    const data = response.data;

    //Filtering 
    let filtered_data= [];

    for(let i=0; i<data.length;i++){
        filtered_data[i] = data[i].name.common;
    }

    //  console.log('Debug:', filtered_data[8]);

    return filtered_data;

 }catch(error){
    console.error('Error on fetch handler: ', error)
 } 

}