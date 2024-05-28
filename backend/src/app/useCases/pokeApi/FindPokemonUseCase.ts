import { AbilityListResponse } from '~/app/contracts/responses/FindPokemonContract';
import PokeApiServiceContract from '~/app/contracts/services/PokeApiContract';

export class FindPokemonUseCase {
  constructor(private pokeApiService: PokeApiServiceContract) {}

  async execute(pokemon: string): Promise<AbilityListResponse> {
    return this.pokeApiService.findPokemonAbilities(pokemon);
  }
}
