import axios from "axios";

export class PokeApi {
  async allPokemons() {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");

    return data;
  }

  async findPokemon(pokemon: string) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    return data;
  }
}
