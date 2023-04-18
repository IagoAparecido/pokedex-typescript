export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
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
