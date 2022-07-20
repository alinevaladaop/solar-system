import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetsElements = planets
      .map((planet) => (<PlanetCard
        key={ planet.name }
        planetName={ planet.name }
        planetImage={ planet.image }
      />));

    return (
      <section>
        <div data-testid="solar-system">SolarSystem</div>
        <div>
          <Title headline="Planetas" />
        </div>

        {planetsElements}
      </section>

    );
  }
}

export default SolarSystem;
