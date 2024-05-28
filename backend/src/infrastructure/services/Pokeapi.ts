import axios from "axios";

export class PokeApi {
  async allPokemons(page: number) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${page}`);

    return data;
  }

  async findPokemonAbilities(pokemon: string) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    return data.abilities;
  }
}
