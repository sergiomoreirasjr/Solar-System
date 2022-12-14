import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div
        data-testid="missions"
      >
        <Title headline="Missões" />
        <section>
          { missions.map((mission) => (
            <MissionCard
              key={ mission.name } // O name é único para cada missão, então pode ser utilizado como parâmetro. Todos que forem únicos podem.
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;

// Para  realização desse requisito, eu usei o arquivo SolarSystem.js realizado anteriormente (Req. 06);
