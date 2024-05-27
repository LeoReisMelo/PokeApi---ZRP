"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllPokemonsUseCase = void 0;
class GetAllPokemonsUseCase {
  constructor(pokeApiService) {
    this.pokeApiService = pokeApiService;
  }
  async execute() {
    return this.pokeApiService.allPokemons();
  }
}
exports.GetAllPokemonsUseCase = GetAllPokemonsUseCase;
//# sourceMappingURL=GetAllPokemonsUseCase.js.map