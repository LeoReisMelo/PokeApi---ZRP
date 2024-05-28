import { PokemonListResponse } from "../responses/AllPokemonsContract"
import { AbilityListResponse } from "../responses/FindPokemonContract"

export default interface PokeApiServiceContract {
  allPokemons: (limit: number, page: number) => Promise<PokemonListResponse>
  findPokemonAbilities: (pokemon: string) => Promise<AbilityListResponse>
}
