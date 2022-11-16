import React from 'react';
import PropTypes from 'prop-types';

class MissionsCard extends React.Component {
  render() {
    const {
      name,
      year,
      country,
      destination } = this.props;

    return (
      <div
        data-testid="mission-card"
      >
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionsCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionsCard;

// Para a realização desse requisito, eu usei o arquivo PlanetCard.js realizado anteriormente (Req. 05);
