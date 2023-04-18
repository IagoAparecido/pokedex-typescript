import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Paginate from "react-paginate";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

import { Pokemon, PokemonResult } from "./types/Pokemon";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<Pokemon[]>([]);
  const [perPage] = useState<number>(20);

  const indexOfLastPokemon = currentPage * perPage;
  const indexOfFirstPokemon = indexOfLastPokemon - perPage;
  const currentData = data.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const getPokemon = async () => {
    const response = await axios.get<{ results: PokemonResult[] }>(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200"
    );
    const pokemonUrls = response.data.results.map(
      (result: PokemonResult) => result.url
    );

    const pokemonData = await Promise.all(
      pokemonUrls.map((url) => axios.get<Pokemon>(url))
    );

    setData(pokemonData.map((response) => response.data));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <div className="App">
      <Header />
      <main>
        {currentData.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            type={pokemon.types.map((type) => type.type.name)}
          />
        ))}
      </main>
      <Paginate
        className="paginate"
        pageCount={Math.ceil(data.length / perPage)}
        onPageChange={handlePageClick}
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
      />
    </div>
  );
}

export default App;
