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
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    base_stat: any;
    stat: {
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
