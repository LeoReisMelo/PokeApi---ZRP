import PokeApiServiceContract from '~/app/contracts/services/PokeApiContract';

export class GetAllPokemonsUseCase {
  constructor(private pokeApiService: PokeApiServiceContract) {}

  async execute(page: number): Promise<any> {
    return this.pokeApiService.allPokemons(page);
  }
}
