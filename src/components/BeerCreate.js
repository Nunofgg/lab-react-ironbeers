import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

function BeerCreate() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');

  const history = useHistory();

  const handleFormSubmit = async (event) => {
        event.preventDefault();
        const body = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy,
        };

        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);

        console.log("beer created")

        history.push("/beers");
  };

  return (
    <>
      <h3>Create Beer</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Tagline</label>
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>First Brewed</label>
        <input
          type="text"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />

        <label>Brewers Tips</label>
        <input
          type="text"
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />

        <label>Contributed By</label>
        <input
          type="text"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default BeerCreate;
