import PokeApiServiceContract from '~/app/contracts/services/PokeApiContract';

export class GetAllPokemonsUseCase {
  constructor(private pokeApiService: PokeApiServiceContract) {}

  async execute(): Promise<any> {
    return this.pokeApiService.allPokemons();
  }
}
