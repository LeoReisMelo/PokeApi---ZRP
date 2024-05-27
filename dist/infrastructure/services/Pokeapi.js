"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PokeApi = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class PokeApi {
  async allPokemons() {
    const {
      data
    } = await _axios.default.get("https://pokeapi.co/api/v2/pokemon");
    return data;
  }
  async findPokemon(pokemon) {
    const {
      data
    } = await _axios.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    return data;
  }
}
exports.PokeApi = PokeApi;
//# sourceMappingURL=Pokeapi.js.map