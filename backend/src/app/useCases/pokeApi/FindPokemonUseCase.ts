import PokeApiServiceContract from '~/app/contracts/services/PokeApiContract';

export class FindPokemonUseCase {
  constructor(private pokeApiService: PokeApiServiceContract) {}

  async execute(pokemon: string): Promise<any> {
    return this.pokeApiService.findPokemon(pokemon);
  }
}
