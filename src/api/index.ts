import { FetchPokemonsResponseType, PokemonDetailsType } from "../types";

export async function fetchPokemonDetails(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = (await res.json()) as PokemonDetailsType;
  return data;
}

export async function fetchPokemons(offset: number, limit: number = 10) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = (await res.json()) as FetchPokemonsResponseType;
  return data;
}
