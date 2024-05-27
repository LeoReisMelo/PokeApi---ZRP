"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _FindPokemonController = require("../../../app/controllers/pokeApi/FindPokemonController");
var _GetAllPokemonsController = require("../../../app/controllers/pokeApi/GetAllPokemonsController");
var _express = require("../../../helpers/express");
const expressInstance = new _express.Server();
var _default = exports.default = expressInstance.init([{
  method: "GET",
  middlewares: [],
  path: "/pokemon/:pokemon",
  description: "Endpoint to get pokemon info",
  handler: new _FindPokemonController.FindPokemon().handle
}, {
  method: "GET",
  middlewares: [],
  path: "/pokemon/all",
  description: "Endpoint to get all pokemon's",
  handler: new _GetAllPokemonsController.GetAllPokemons().handle
}]);
//# sourceMappingURL=index.js.map