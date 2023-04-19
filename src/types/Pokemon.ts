export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  id: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface PokemonResult {
  name: string;
  url: string;
}

export interface PokemonResponse {
  results: PokemonResult[];
}

export type TypeProps = {
  name: string;
};
