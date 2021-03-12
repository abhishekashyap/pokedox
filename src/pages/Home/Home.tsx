import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../../api";
import { PokemonListItemType } from "../../types";
import styles from "./Home.module.css";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonListItemType>();
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  useEffect(() => {
    fetchPokemons(page * 10).then((data) => {
      setPokemons(data.results);
      setHasNext(!data.next);
      setHasPrev(!data.previous);
    });
  }, [page]);

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
      <div className={styles.btns}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={hasPrev}
          className={styles.btn}
        >
          {"< PREV"}
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={hasNext}
          className={styles.btn}
        >
          {"NEXT >"}
        </button>
      </div>
    </div>
  );
}
