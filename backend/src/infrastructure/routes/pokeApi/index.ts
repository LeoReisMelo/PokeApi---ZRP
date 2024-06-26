import { FindPokemon } from '~/app/controllers/pokeApi/FindPokemonController'
import { ListAllPokemons } from '~/app/controllers/pokeApi/GetAllPokemonsController'
import { RouteDefinition } from '~/app/contracts/routes/RoutesDefinitionContract'
import { FindAllAbilities } from '~/app/controllers/pokeApi/FindAllAbilitiesController'

const routes: RouteDefinition[] = [
  {
    method: 'GET',
    path: '/pokemon/all/:page',
    middlewares: [],
    description: 'Endpoint to get all Pokémon on a specific page',
    handler: new ListAllPokemons().handle,
  },
  {
    method: 'GET',
    path: '/pokemon/allAbilities',
    middlewares: [],
    description: 'Endpoint to get all Pokemon abilities',
    handler: new FindAllAbilities().handle,
  },
  {
    method: 'GET',
    path: '/pokemon/:pokemon',
    middlewares: [],
    description: 'Endpoint to get Pokémon information by name',
    handler: new FindPokemon().handle,
  }
]

export default routes
