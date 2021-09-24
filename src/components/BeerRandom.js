import axios from "axios";
import React, {useState, useEffect} from "react";

function BeerRandom(){
    const [berrRandom, setBeerRandom] = useState({});

    useEffect(() => {
        async function getRandomBeer(){
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");

            setBeerRandom(response.data);
        }
        getRandomBeer();
    }, []);

    return (
        <div>
            <img width="200" src={berrRandom.image_url} alt={berrRandom.name} />
            <div>
                <div>
                    <h1>{berrRandom.name}</h1>
                    <h3>{berrRandom.tagline}</h3>
                </div>
                <div>
                    <h2>{berrRandom.attenuation_level}</h2>
                    <h3>{berrRandom.first_brewed}</h3>
                </div>
                <p>{berrRandom.description}</p>
                <p>{berrRandom.contributed_by}</p>
            </div>
        </div>
    );

}

export default BeerRandom;