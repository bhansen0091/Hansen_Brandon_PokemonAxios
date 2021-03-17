import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios';

function App() {

  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
    .then(res => setAllPokemon(res.data.results))
    .catch(err => console.log(err));
  }, [])

  const getPokemon = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then(res => setAllPokemon(res.data.results))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Pokemon</h1>
        <div className="">
          <button 
            type="button" 
            className="btn btn-sm btn-primary border-dark mb-2"
            onClick = {getPokemon}
          >Get Pokemon
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly">
          {
            allPokemon.map((p,i) => 
              <PokemonCard
                pokemonName = {p.name}
                idx = {i+1}
                key = {i}
              />
            )
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
