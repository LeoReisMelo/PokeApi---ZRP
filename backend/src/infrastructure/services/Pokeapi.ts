import axios from "axios";
import { PokemonListResponse } from "~/app/contracts/responses/AllPokemonsContract";
import { AbilityListResponse } from "~/app/contracts/responses/FindPokemonContract";

export class PokeApi {
  async allPokemons(limit: number, page: number): Promise<PokemonListResponse> {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`);

    return data;
  }

  async findPokemonAbilities(pokemon: string): Promise<AbilityListResponse> {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    let ability;

    if (data.abilities) {
       ability = data.abilities.map((result: any) => result.ability);
    }

    return ability.map((result: any) => result.name).sort((a: string, b: string) => a.localeCompare(b));
  }
}
