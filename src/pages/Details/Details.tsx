import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../../api";
import { PokemonDetailsType, ParamsType } from "../../types";
import styles from "./Details.module.css";

export default function Details() {
  const [pokemon, setPokemon] = useState<PokemonDetailsType>();
  const { id } = useParams<ParamsType>();

  useEffect(() => {
    if (id) fetchPokemonDetails(Number(id)).then((data) => setPokemon(data));
  }, [id]);

  if (pokemon) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className={styles.avatar}
          />
          <div className={styles.pokedetails}>
            <h3 className={styles.name}>{pokemon.name}</h3>
            <div className={styles.content}>
              <span>Height is {pokemon.height} meters</span>
              <span>Weighs {pokemon.weight} Kg</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className={styles.container}>Details not found</div>;
}
