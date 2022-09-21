import React from 'react';
import Title from './Title'; // Inicialmente eu tentei importar para o App.js mas o requisito pede para importar para o Componente SolarSystem.js;

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
