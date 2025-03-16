import React from "react";
import { useState, useEffect } from "react";

import { fetch_all_countries_handler } from "../utils/countrieCalloutHandler";

const Countries = ()=>{

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const loadData= async ()=>{
            try{
                const data = await fetch_all_countries_handler();
                setCountries(data);
            }catch(error){
                console.error('Error loading data to component:', error);
            }
        }

        loadData();
    }, []);

const search_handler = (event)=>{
    event.preventDefault();
    const user_input = event.target.value.toLowerCase();
    let display_data;

    try{
        display_data= countries.filter(country=>
            country.toLowerCase().includes(user_input)
        );

        console.log('Debugging: ', display_data);
    }catch(error){
        console.error('Error filtering data:', error);
    }

}
    //pendiente display de los países para la parte 2.18, 2.19, 2.20

const display =(data_to_display)=>{
    if(data_to_display.lenght>10){
        return 'Too many matches. Specify'
    }


}

    return(
        <div>
            <p>Find countries</p>

            <input
                onChange={search_handler}
            />

            <div>

            </div>
            
            
        </div>
    )
}

export default Countries