// Pokedex : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon .
import  React,  { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

export default class Pokedex extends Component {
  render() {
    return pokemons.map(pkmn => {
      return (<Pokemon key={pkmn.id}
        pokemon = {pkmn}
        />);
    });
  }
}