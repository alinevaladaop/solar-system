import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div data-testid="mission-card" className="missionCard">
        <p className="missionName" data-testid="mission-name">{name}</p>
        <p className="missionYear" data-testid="mission-year">{year}</p>
        <p className="missionCountry" data-testid="mission-country">{country}</p>
        <p
          className="missionDestination"
          data-testid="mission-destination"
        >
          {destination}
        </p>

      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
