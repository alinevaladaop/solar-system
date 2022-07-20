import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="solar-system">SolarSystem</div>
        <div>
          <Title headline="Planetas" />
        </div>
      </section>

    );
  }
}

export default SolarSystem;
