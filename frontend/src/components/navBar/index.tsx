import React, { useState, useEffect } from "react";
import PokeLogo from "../../assets/logo-poke.png";
import api from "../../services/api";
import { NavBar, NavWrapper, NavImg, PokeTotal } from "./styles";


interface PokemonData {
  count: number;
}

const Navbar: React.FC = () => {
  const [total, setTotalPokemon] = useState<number>(0);
  const [totalAbilities, setTotalAbilities] = useState<number>(0);

   const handleLogoClick = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const responsePokemon = await api.get<PokemonData>(
          "pokemon/all/0?limit=10"
        );
        const responseAbilities = await api.get<PokemonData>(
          "pokemon/allAbilities"
        );

        setTotalPokemon(responsePokemon.data.count);
        setTotalAbilities(responseAbilities.data.count);
      } catch (error) {
        console.error("Erro ao carregar o total de Pokémons:", error);
      }
    };

    fetchTotal();
  }, []);

  return (
    <NavBar>
      <NavWrapper>
        <NavImg>
          <img
            src={PokeLogo}
            alt="Pokemon"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        </NavImg>
        <PokeTotal>
          <div>
            <span>
              Total de <span>{total}</span> Pokémons!
            </span>
          </div>
          <div style={{ marginTop: "10px" }} />
          <span>
            Total de <span>{totalAbilities}</span> habilidades!
          </span>
        </PokeTotal>
      </NavWrapper>
    </NavBar>
  );
};

export default Navbar;
