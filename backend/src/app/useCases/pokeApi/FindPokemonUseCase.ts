import PokeApiServiceContract from '~/app/contracts/services/PokeApiContract'

export class FindPokemonUseCase {
  constructor(private pokeApiService: PokeApiServiceContract) {}

  async execute(pokemon: string): Promise<Array<string>> {
    try {
      return this.pokeApiService.findPokemonAbilities(pokemon)
    } catch (err) {
      throw err;
    }
  }
}
