import React from 'react';
import Title from './Title'; // Inicialmente eu tentei importar para o App.js mas o requisito pede para importar para o Componente SolarSystem.js;
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div
        data-testid="solar-system"
      >
        <Title headline="Planetas" />
        <section>
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;

// Para realizar o Requisito 06, eu voltei na aula do Luanderson do dia 20/09/22.
