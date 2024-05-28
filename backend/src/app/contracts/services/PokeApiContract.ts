import { PokemonListResponse } from "../responses/AllPokemonsContract"

export default interface PokeApiServiceContract {
  allPokemons: (limit: number, page: number) => Promise<PokemonListResponse>
  findPokemonAbilities: (pokemon: string) => Promise<Array<string>>
  findAllAbilities: () => Promise<Array<string>>
}
