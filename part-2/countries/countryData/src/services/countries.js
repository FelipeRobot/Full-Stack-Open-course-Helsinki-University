import axios from 'axios'

const API_URL_All ='https://studies.cs.helsinki.fi/restcountries/api/all';
const API_URL_SEARCH ='https://studies.cs.helsinki.fi/restcountries/api/name/';

export const fetch_Specific_Countries = async (countrie_string)=>{
    
    const target = API_URL_SEARCH + countrie_string;
    try{
        const response = await axios.get(target);
        return response;
    }   
    catch(error){
        console.error('There was a problem fetching the data: ', error);
    }
    
}

export const fetch_all_countries = async ()=>{
    try{
        const response =await axios.get(API_URL_All);
        
        if(!Array.isArray(response.data)){
            throw new Error('The response is not an array.');
        }
            
        return response;

    }catch(error){
        console.error('There was a problem fetching the data: ', error);
    }
}