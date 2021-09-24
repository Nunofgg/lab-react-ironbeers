import React, {useState, useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function BeersList(){
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        async function getBeers(){
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            setBeers(response.data);
        }
        getBeers();
    }, []);

    return (
        <ul>
            {beers.map((beer, index) => {
                return (
                    <li key={index}>
                        <NavLink exact to={`/beers/${beer._id}`} >
                            <img src={beer.image_url} />
                            <h3>{beer.name}</h3>
                            <h5>{beer.tagline}</h5>
                            <p>Created by: {beer.contributed_by}</p>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}

export default BeersList;