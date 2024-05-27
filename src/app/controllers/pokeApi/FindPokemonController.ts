import { Controller } from "../Controller";
import { Request, Response } from "express";
import { FindPokemonUseCase } from "~/app/useCases/pokeApi/FindPokemonUseCase";
import { PokeApi } from "~/infrastructure/services/Pokeapi";

export class FindPokemon implements Controller {
  constructor() {}

  async handle(request: Request, response: Response) {
    try {
      const { pokemon } = request.params;

      const pokeApiService = new PokeApi();
      const findPokemonUseCase = new FindPokemonUseCase(pokeApiService);

      const result = await findPokemonUseCase.execute(pokemon);

      response.status(200).json(result);
    } catch (error: any) {
      console.error({ error });

      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
