import React, { useState, useEffect } from "react";
import PokeLogo from "../../assets/logo-poke.png";
import api from "../../services/api";
import { NavBar, NavWrapper, NavImg, PokeTotal } from "./styles";

interface PokemonData {
  count: number;
}

const Navbar: React.FC = () => {
  const [totalPokemons, setTotalPokemons] = useState<number>(0);

  useEffect(() => {
    const fetchTotalPokemons = async () => {
      try {
        const response = await api.get<PokemonData>("pokemon/all/1");
        setTotalPokemons(response.data.count);
      } catch (error) {
        console.error("Erro ao carregar o total de Pokémons:", error);
      }
    };

    fetchTotalPokemons();
  }, []);

  return (
    <NavBar>
      <NavWrapper>
        <NavImg>
          <img src={PokeLogo} alt="Pokemon" />
        </NavImg>
        <PokeTotal>
          <span>
            Total de <span>{totalPokemons}</span> Pokémons!
          </span>
        </PokeTotal>
      </NavWrapper>
    </NavBar>
  );
};

export default Navbar;