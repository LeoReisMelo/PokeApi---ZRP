export default interface PokeApiServiceContract {
  allPokemons: (page: number) => any
  findPokemonAbilities: (pokemon: string) => any
}
