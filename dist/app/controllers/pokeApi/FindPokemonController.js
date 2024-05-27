"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindPokemon = void 0;
var _FindPokemonUseCase = require("../../useCases/pokeApi/FindPokemonUseCase");
var _Pokeapi = require("../../../infrastructure/services/Pokeapi");
class FindPokemon {
  constructor() {}
  async handle(request, response) {
    console.log('chegou aqui');
    try {
      const {
        pokemon
      } = request.params;
      console.log(pokemon);
      const pokeApiService = new _Pokeapi.PokeApi();
      const findPokemonUseCase = new _FindPokemonUseCase.FindPokemonUseCase(pokeApiService);
      const result = await findPokemonUseCase.execute(pokemon);
      response.status(200).json(result);
    } catch (error) {
      console.error({
        error
      });
      return response.status(500).json({
        error: "Internal server error"
      });
    }
  }
}
exports.FindPokemon = FindPokemon;
//# sourceMappingURL=FindPokemonController.js.map