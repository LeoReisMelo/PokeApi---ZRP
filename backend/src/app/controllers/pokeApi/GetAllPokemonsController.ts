import { Controller } from "../Controller";
import { Request, Response } from "express";
import { GetAllPokemonsUseCase } from "~/app/useCases/pokeApi/GetAllPokemonsUseCase";
import { PokeApi } from "~/infrastructure/services/Pokeapi";

export class GetAllPokemons implements Controller {
  constructor() {}

  async handle(request: Request, response: Response) {
    try {
      const { page } = request.params;

      const pokeApiService = new PokeApi();
      const getAllPokemonsUseCase = new GetAllPokemonsUseCase(pokeApiService);

      const pokemons = await getAllPokemonsUseCase.execute(Number(page));

      response.status(200).json(pokemons);
    } catch (error: any) {
      console.error({ error });

      return response.status(500).json({ error: "Internal server error" });
    }
  }
}
