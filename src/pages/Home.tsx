import React, { useEffect, useState } from "react";

type PokemonListItemType = {
  name: string;
  url: string;
}[];

type FetchPokemonsResponseType = {
  count: 1118;
  next: string | null;
  previous: null | null;
  results: PokemonListItemType;
};

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonListItemType>();

  async function fetchPokemons(offset: number, limit: number) {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = (await res.json()) as FetchPokemonsResponseType;
    setPokemons(data.results);
  }

  useEffect(() => {
    fetchPokemons(0, 10);
  }, []);

  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}
    </div>
  );
}
