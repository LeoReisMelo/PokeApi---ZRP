import { PokemonListResponse } from '~/app/contracts/responses/AllPokemonsContract';
import PokeApiServiceContract from '~/app/contracts/services/PokeApiContract';

export class GetAllPokemonsUseCase {
  constructor(private pokeApiService: PokeApiServiceContract) {}

  async execute(page: number, limit: number): Promise<PokemonListResponse> {
    return this.pokeApiService.allPokemons(limit, page);
  }
}
