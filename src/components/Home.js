import React from 'react';
import { NavLink } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function Home() {
  return (
    <>
      <NavLink to="/beers">
        <div>
          <img src={beers} />
          <div>
            <h3>ALL BEERS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae blandit massa. Sed vel dui nec felis iaculis
              fermentum sit amet quis magna. Phasellus justo lorem, pellentesque
              et nisl vel, interdum placerat eros.{' '}
            </p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/random-beer">
        <div>
          <img src={randomBeer} />
          <div>
            <h3>RANDOM BEER</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae blandit massa. Sed vel dui nec felis iaculis
              fermentum sit amet quis magna. Phasellus justo lorem, pellentesque
              et nisl vel, interdum placerat eros.{' '}
            </p>
          </div>
        </div>
      </NavLink>
      <NavLink to="/create-beer">
        <div>
          <img src={newBeer} />
          <div>
            <h3>NEW BEER</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae blandit massa. Sed vel dui nec felis iaculis
              fermentum sit amet quis magna. Phasellus justo lorem, pellentesque
              et nisl vel, interdum placerat eros.{' '}
            </p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default Home;
