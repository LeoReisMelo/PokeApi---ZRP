import { FindPokemon } from "~/app/controllers/pokeApi/FindPokemonController";
import { GetAllPokemons } from "~/app/controllers/pokeApi/GetAllPokemonsController";
import { Server } from "~/helpers/express";

const expressInstance = new Server();

export default expressInstance.init([
  {
    method: "GET",
    middlewares: [],
    path: "/pokemon/:pokemon",
    description: "Endpoint to get pokemon info",
    handler: new FindPokemon().handle,
  },
  {
    method: "GET",
    middlewares: [],
    path: "/pokemon/all",
    description: "Endpoint to get all pokemon's",
    handler: new GetAllPokemons().handle,
  },
]);
