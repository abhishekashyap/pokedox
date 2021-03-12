import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

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
    <div className={styles.container}>
      <h1 className={styles.heading}>Pokédex</h1>
      {pokemons ? (
        pokemons.map((pokemon) => {
          const urlParams = pokemon.url.split("/");
          // Get the last param of the URL
          const id = urlParams[urlParams.length - 2];
          return (
            <Link to={`/${id}`} className={styles.listItem} key={id}>
              {pokemon.name}
            </Link>
          );
        })
      ) : (
        <p>No Pokemons found</p>
      )}
    </div>
  );
}