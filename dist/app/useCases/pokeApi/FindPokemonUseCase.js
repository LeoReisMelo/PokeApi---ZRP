"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindPokemonUseCase = void 0;
class FindPokemonUseCase {
  constructor(pokeApiService) {
    this.pokeApiService = pokeApiService;
  }
  async execute(pokemon) {
    return this.pokeApiService.findPokemon(pokemon);
  }
}
exports.FindPokemonUseCase = FindPokemonUseCase;
//# sourceMappingURL=FindPokemonUseCase.js.map