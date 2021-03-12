export type PokemonListItemType = {
  name: string;
  url: string;
}[];

export type FetchPokemonsResponseType = {
  count: 1118;
  next: string | null;
  previous: string | null;
  results: PokemonListItemType;
};

export type ParamsType = { id: string };

export type PokemonDetailsType = {
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
