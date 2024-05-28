import axios from "axios";
import { GetAllPokemonsUseCase } from "~/app/useCases/pokeApi/GetAllPokemonsUseCase";
import { PokeApi } from "~/infrastructure/services/Pokeapi";

jest.mock("axios");

describe("GetAllPokemonsUseCase", () => {
  it("should return a list of pokemons", async () => {
    const mockedPokemonsResponse = {
      count: 1302,
      next: "urlTeste",
      previous: "urlTeste",
      results: [{ name: "bulbasaur", url: 'https://pokeapi.co/api/v2/pokemon/11/' }, { name: "charmander", url: 'https://pokeapi.co/api/v2/pokemon/12/' }],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockedPokemonsResponse,
    });

    const pokeApiService = new PokeApi();
    const getAllPokemonsUseCase = new GetAllPokemonsUseCase(pokeApiService);

    const pokemons = await getAllPokemonsUseCase.execute(1, 10);

    expect(pokemons.results).toEqual(mockedPokemonsResponse.results);
  });
});
