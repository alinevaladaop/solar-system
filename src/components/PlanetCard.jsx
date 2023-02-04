import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <section>
        <div data-testid="planet-card">
          <img
            className="planetImg"
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
          <p data-testid="planet-name" className="planetName">{planetName}</p>
        </div>
      </section>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
