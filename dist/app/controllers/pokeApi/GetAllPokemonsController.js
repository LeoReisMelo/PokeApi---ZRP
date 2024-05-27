"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllPokemons = void 0;
var _GetAllPokemonsUseCase = require("../../useCases/pokeApi/GetAllPokemonsUseCase");
var _Pokeapi = require("../../../infrastructure/services/Pokeapi");
class GetAllPokemons {
  constructor() {}
  async handle(_request, response) {
    try {
      const pokeApiService = new _Pokeapi.PokeApi();
      const getAllPokemonsUseCase = new _GetAllPokemonsUseCase.GetAllPokemonsUseCase(pokeApiService);
      const pokemons = await getAllPokemonsUseCase.execute();
      response.status(200).json(pokemons);
    } catch (error) {
      console.error({
        error
      });
      return response.status(500).json({
        error: 'Internal server error'
      });
    }
  }
}
exports.GetAllPokemons = GetAllPokemons;
//# sourceMappingURL=GetAllPokemonsController.js.map