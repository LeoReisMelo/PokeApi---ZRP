import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { AbilitiesContainer, AbilityItem } from "./styles";

const Abilities: React.FC = () => {
  const [allAbilities, setAllAbilities] = useState<{ name: string; even: boolean }[]>([]);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const response = await api.get("/pokemon/allAbilities");

        const abilities = response.data.abilityNames.map((response: string, index: any) => {
          return {name: response.charAt(0).toUpperCase() + response.slice(1), even: index % 2 === 0};
        });
        setAllAbilities(abilities);
      } catch (error) {
        console.error("Erro ao carregar as habilidades:", error);
      }
    };

    fetchAbilities();
  }, []);

  return (
    <AbilitiesContainer>
      {allAbilities.map((ability, index) => (
        <AbilityItem key={index} even={ability.even}>
          {ability.name}
        </AbilityItem>
      ))}
    </AbilitiesContainer>
  );
};

export default Abilities;
