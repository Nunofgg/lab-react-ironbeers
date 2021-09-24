import axios from "axios";
import React, {useState, useEffect} from "react";

function BeerDetails({match}){
    const [beer, setBeer] = useState({});

    useEffect(() => {
        async function getBeer(){
            const beerId = match.params.id;
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);

            setBeer(response.data);
        }
        getBeer();
    }, []);

    return (
        <div>
            <img width="200" src={beer.image_url} alt={beer.name} />
            <div>
                <div>
                    <h1>{beer.name}</h1>
                    <h3>{beer.tagline}</h3>
                </div>
                <div>
                    <h2>{beer.attenuation_level}</h2>
                    <h3>{beer.first_brewed}</h3>
                </div>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>
    );
}

export default BeerDetails;