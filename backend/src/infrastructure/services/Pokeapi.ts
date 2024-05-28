import { PokemonListResponse } from '~/app/contracts/responses/AllPokemonsContract'
import dotenv from 'dotenv'
import axios from 'axios';

dotenv.config()

export class PokeApi {
  async allPokemons(limit: number, page: number): Promise<PokemonListResponse> {
    try {
      const { data } = await axios.get(
        `${process.env.POKEAPI_URL}?limit=${limit}&offset=${page}`,
      )

      return data
    } catch (error: any) {
      throw new Error(`Failed to fetch all Pokemons: ${error.message}`);
    }
  }

  async findPokemonAbilities(pokemon: string): Promise<Array<string>> {
    try {
      const { data } = await axios.get<{
        abilities: { ability: { name: string } }[]
      }>(`${process.env.POKEAPI_URL}/${pokemon}`)

      return data.abilities.map((ability) => ability.ability.name).sort()
    } catch (error: any) {
      throw new Error(`Failed to fetch abilities for Pokemon ${pokemon}: ${error.message}`);
    }
  }
}
