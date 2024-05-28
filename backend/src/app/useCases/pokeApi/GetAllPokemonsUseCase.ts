import { PokemonListResponse } from '~/app/contracts/responses/AllPokemonsContract'
import PokeApiServiceContract from '~/app/contracts/services/PokeApiContract'

export class ListAllPokemonsUseCase {
  constructor(private pokeApiService: PokeApiServiceContract) {}

  async execute(page = 0, limit = 10): Promise<PokemonListResponse> {
    return this.pokeApiService.allPokemons(limit, page)
  }
}
