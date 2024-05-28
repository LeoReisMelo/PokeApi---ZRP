import { FindPokemonUseCase } from '~/app/useCases/pokeApi/FindPokemonUseCase';
import { PokeApi } from '~/infrastructure/services/Pokeapi';
import axios from 'axios';

jest.mock('axios');

describe('FindPokemonUseCase', () => {
  it('should return abilities of a pokemon', async () => {
    const mockedAbilitiesResponse = {
      abilities: [
        { ability: { name: 'overgrow' } },
        { ability: { name: 'chlorophyll' } },
      ],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockedAbilitiesResponse,
    });

    const pokeApiService = new PokeApi();
    const findPokemonUseCase = new FindPokemonUseCase(pokeApiService);

    const abilities = await findPokemonUseCase.execute('bulbasaur');

    expect(abilities).toEqual(['chlorophyll', 'overgrow']);
  });

  it('should return empty array if pokemon does not have abilities', async () => {
    const mockedAbilitiesResponse = {
      abilities: [],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockedAbilitiesResponse,
    });

    const pokeApiService = new PokeApi();
    const findPokemonUseCase = new FindPokemonUseCase(pokeApiService);

    const abilities = await findPokemonUseCase.execute('ditto');

    expect(abilities).toEqual([]);
  });
});