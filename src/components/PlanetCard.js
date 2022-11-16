import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const {
      planetName,
      planetImage } = this.props;

    return (
      <div
        data-testid="planet-card"
      >
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;

// Na linha 11, o Template Literals foi utilizado porque além do valor recebido por planetName} eu preciso da string "Planeta".
// Site que consultei para tirar dúvidas: https://stackoverflow.com/questions/49735097/template-literals-in-jsx
