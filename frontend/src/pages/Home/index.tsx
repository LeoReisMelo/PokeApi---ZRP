import React, { useState, useEffect } from "react";
import "../../global.css";
import "./styles.css";
import api from "../../services/api";

// Importar o componente PokemonItem
// import PokemonItem from "../../components/pokemonListItem";

// Define a interface para o Pokémon
interface Pokemon {
  id: string;
  name: string;
  url: string;
  image: string;
}

const ListPokemon: React.FC = () => {
  const remove = "https://pokeapi.co/api/v2/pokemon/";

  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [pagesTotal, setPagesTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function loadPokemons() {
    if (loading) {
      return;
    }

    if (total > 0 && pokemons.length === total) {
      return;
    }

    setLoading(true);
    try {
      const response = await api.get(`pokemon/?limit=10&offset=${page * 10}`);

      const resposta = response.data.results.map((item: { name: string; url: string }) => {
        const id = item.url.replace(remove, "").replace("/", "");
        return {
          id,
          name: item.name,
          url: item.url,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        };
      });

      setPokemons(resposta);
      setTotal(response.data.count);
      setTotalPagesToAlter(response.data.count);
    } catch (error) {
      console.error("Erro ao carregar os Pokémons:", error);
    }
    setLoading(false);
  }

  function setTotalPagesToAlter(total: number) {
    let calc = 0;
    if (total > 0) {
      calc = Math.ceil(total / 10);
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

  useEffect(() => {
    loadPokemons();
    // Adiciona uma dependência vazia para evitar loops infinitos
  }, [page]);

  return (
    <div className="poke-container">
      <header>
        <h1>Bem-vindo a sua pokedex!</h1>
      </header>
      <section className="section-poke">
        {pokemons.map((pokemon) => (
          // Substitua PokemonItem pelo seu componente real
          // <PokemonItem
          //   key={pokemon.id}
          //   image={pokemon.image}
          //   name={pokemon.name}
          // />
          <div key={pokemon.id}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </section>
      <div className="buttons-page">
        <button className="button back" onClick={setPreviusPage}>
          VOLTAR
        </button>
        <button className="button next" onClick={setNextPage}>
          PRÓXIMO
        </button>
        <div className="pagination">{`Página ${page + 1} de ${pagesTotal}`}</div>
      </div>
    </div>
  );
};

export default ListPokemon;