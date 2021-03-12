import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

type ParamsType = { id: string };

type PokemonDetailsType = {
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: { name: string; url: string }[];
  game_indices: { game_index: 153; version: { name: string; url: string } };
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: { name: string; url: string }[];
  sprites: any;
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  types: { slot: number; type: { name: string; url: string } }[];
  weight: number;
};

export default function Details() {
  const [pokemon, setPokemon] = useState<PokemonDetailsType>();

  async function fetchPokemonDetails(id: number) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = (await res.json()) as PokemonDetailsType;
    setPokemon(data);
    console.log(data);
  }

  const { id } = useParams<ParamsType>();

  useEffect(() => {
    if (id) fetchPokemonDetails(Number(id));
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
              <span>Height: {pokemon.height} meters</span>
              <span>Weight: {pokemon.weight} Kg</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>Details not found</div>;
}
