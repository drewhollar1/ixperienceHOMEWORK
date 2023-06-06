import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonTable from './components/PokemonTable';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  async function fetchPokemonData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const data = await response.json();
    
    setPokemonData({
        name: data.name,
        species: data.species.name,
        type: data.types.map((type) => type.type.name).join(', '),
        abilities: data.abilities.map((ability) => ability.ability.name).join(', '),
      });
  }

  return (
    <div className = 'container my-5'>
    <div className="text-center mt-5 mx-5">
      <h1>Pokemon Data Fetcher</h1>
      <p>Enter a pokmeon name below to recieve info on their species, type, and abilities:</p>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <div></div>
      <button className="btn btn-primary mt-4" onClick={fetchPokemonData}>
        Fetch Pokémon Data
      </button>

      {pokemonData && <PokemonTable pokemonData={pokemonData} />}
    </div>
    </div>
  );
}

export default App;

