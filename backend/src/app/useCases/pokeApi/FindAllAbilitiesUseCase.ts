import PokeApiServiceContract from '~/app/contracts/services/PokeApiContract'

export class FindAllAbilitiesUseCase {
  constructor(private pokeApiService: PokeApiServiceContract) {}

  async execute(): Promise<Array<string>> {
    try {
      return this.pokeApiService.findAllAbilities()
    } catch (err) {
      throw err;
    }
  }
}
