import React, { useState, useEffect } from "react";
import "../../global.css";
import "./styles.css";
import api from "../../services/api";
import PokemonListItem from "../../components/pokemonListItem";
import { MdCatchingPokemon } from "react-icons/md";

interface Pokemon {
  id: string;
  number: number;
  name: string;
  image: string;
  abilities: Array<string>;
}

const ListPokemon: React.FC = () => {
  const remove = "https://pokeapi.co/api/v2/pokemon/";

  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [pagesTotal, setPagesTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [limit, setLimit] = useState<number>(10);
  const [sortOrder, setSortOrder] = useState<string>("default");
  const [filter, setFilter] = useState<string>("");

  async function loadPokemons() {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await api.get(
        `pokemon/all/${page * limit}?limit=${limit}`
      );

      let pokemonsData = await Promise.all(
        response.data.results.map(
          async (item: { name: string; url: string }) => {
            const id = item.url.replace(remove, "").replace("/", "");
            const abilitiesData = await api.get(`pokemon/${item.name}`);

            const number: RegExpMatchArray | null =
              item.url.match(/\/pokemon\/(\d+)\//);

            return {
              id,
              name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
              number: number ? number[1] : null,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
              abilities: abilitiesData.data || [],
            };
          }
        )
      );

      if (sortOrder === "A-Z") {
        pokemonsData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder === "Z-A") {
        pokemonsData.sort((a, b) => b.name.localeCompare(a.name));
      }

      if (filter) {
        pokemonsData = pokemonsData.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filter.toLowerCase())
        );
      }

      setAllPokemons(pokemonsData);
      setTotal(response.data.count);
      setTotalPagesToAlter(response.data.count);
    } catch (error) {
      console.error("Erro ao carregar os Pokémons:", error);
    } finally {
      setLoading(false);
    }
  }

  function setTotalPagesToAlter(total: number) {
    let calc = 0;
    if (total > 0) {
      calc = Math.ceil(total / limit);
    }
    setPagesTotal(calc);
  }

  function setNextPage() {
    if (page >= pagesTotal - 1) return;
    setPage(page + 1);
  }

  function setPreviusPage() {
    if (page <= 0) return;
    setPage(page - 1);
  }

  function handleAbilitiesButtonClick() {
    window.location.href = "/abilities";
  }

  function handlePageSizeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setLimit(parseInt(event.target.value));
    setPage(0);
  }

  function handleSortOrderChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortOrder(event.target.value);
  }

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    loadPokemons();
  }, [page, limit, sortOrder, filter]);

  return (
    <div className="poke-container">
      <header>
        <h1>Bem-vindo a sua pokedex!</h1>
        <div className="header-selects">
          <select value={limit} onChange={handlePageSizeChange}>
            <option value={10}>10 - Pokemons</option>
            <option value={20}>20 - Pokemons</option>
            <option value={40}>40 - Pokemons</option>
            <option value={50}>50 - Pokemons</option>
            <option value={70}>70 - Pokemons</option>
            <option value={100}>100 - Pokemons</option>
          </select>
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Filtrar pokémons..."
          value={filter}
          onChange={handleFilterChange}
        />
        <div className="button-container">
          <button
            className="abilities-button"
            onClick={handleAbilitiesButtonClick}
          >
            <MdCatchingPokemon /> Habilidades
          </button>
        </div>
      </header>
      <section className="section-poke">
        {allPokemons.map((pokemon) => (
          <PokemonListItem
            key={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            number={pokemon.number}
            abilities={pokemon.abilities}
          />
        ))}
        {allPokemons.length === 0 && <p>Nenhum pokémon encontrado.</p>}
      </section>
      <div className="buttons-page">
        <button className="button back" onClick={setPreviusPage}>
          VOLTAR
        </button>
        <button className="button next" onClick={setNextPage}>
          PRÓXIMO
        </button>
        <div className="pagination">{`Página ${
          page + 1
        } de ${pagesTotal}`}</div>
      </div>
    </div>
  );
};

export default ListPokemon;
