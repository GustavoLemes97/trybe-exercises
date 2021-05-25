// Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.
import  React,  { Component } from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types'

export default class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return(
    <div className='pokemon'>
      <div>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>Average Weight: {averageWeight.value}
      <span>{averageWeight.measurementUnit}</span>
      </p>
      </div>
      <img className='imagem' src={image} alt={name}></img>
    </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
}