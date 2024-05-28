import { FindPokemon } from "~/app/controllers/pokeApi/FindPokemonController";
import { GetAllPokemons } from "~/app/controllers/pokeApi/GetAllPokemonsController";

const routes = [
  {
    method: "GET",
    path: "/pokemon/all/:page",
    middlewares: [],
    description: "Endpoint to get all pokemon's",
    handler: new GetAllPokemons().handle,
  },
  {
    method: "GET",
    path: "/pokemon/:pokemon",
    middlewares: [],
    description: "Endpoint to get pokemon info",
    handler: new FindPokemon().handle,
  },
];

export default routes;