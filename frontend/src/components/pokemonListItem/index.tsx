import React from "react";
import { Container, Name, Image, Abilities, AbilityItem, Number } from "./styles";
import { abilityColors, abilityTypeMapping } from "../../utils/abilityColorsAndTypes";

interface PokemonListItemProps {
  name: string;
  number: number;
  image: string;
  abilities: Array<string>;
}


const getAbilityColor = (ability: string): string => {
  for (const type in abilityTypeMapping) {
    if (abilityTypeMapping[type].includes(ability.toLowerCase())) {
      return abilityColors[type] || "gray";
    }
  }
  return "white";
};

export const PokemonListItem: React.FC<PokemonListItemProps> = ({
  name,
  number,
  image,
  abilities,
}) => {
  console.log(abilities);
  return (
    <Container>
      <Number>Nº {number}</Number>
      <Name>{name}</Name>
      <Image src={image} alt={name} />
      <Abilities>
        {abilities.map((ability, index) => (
          <AbilityItem key={index} style={{ backgroundColor: getAbilityColor(ability) }}>{ability}</AbilityItem>
        ))}
      </Abilities>
    </Container>
  );
};

export default PokemonListItem;