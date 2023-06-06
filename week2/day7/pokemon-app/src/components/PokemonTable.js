import React from 'react';

export default function PokemonTable({ pokemonData }) {
  return (
    <div>
      <h2>{pokemonData.name}</h2>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Species</th>
            <th>Type(s)</th>
            <th>Abilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pokemonData.species}</td>
            <td>{pokemonData.type}</td>
            <td>{pokemonData.abilities}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
