import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props; // Conferi na aula do Luanderson do dia 21/09/022;
    return (
      <h2>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired, // 1: https://reactjs.org/docs/typechecking-with-proptypes.html
};

export default Title;

/*
1° Tentativa: <h2>{ this.props.headline }</h2>, mas o lint acusou "Must use destructuring props assignment". Poderia ser resolvido excluindo o .headline, mas optei pela maneira como foi feita. Site de apoio: https://reactjs.org/docs/components-and-props.html

Inicialmente eu tinha importado o Title para o App, mas não é um requisito da questão então eu esclui a importação.
*/
