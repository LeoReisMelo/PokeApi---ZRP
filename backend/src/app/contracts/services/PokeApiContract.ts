export default interface PokeApiServiceContract {
  allPokemons: () => any
  findPokemon: (pokemon: string) => any
}
