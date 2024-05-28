import styled from "styled-components";

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const AbilityItem = styled.div<{ even: boolean }>`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  text-align: center;
  background-color: ${props => (props.even ? "#f2c31a" : "#2f55b5")};
  cursor: pointer;
  font-size: 3rem;

  &:hover {
    background-color: ${props => (props.even ? "#d1a515" : "#244086")}; /* Cor mais escura ao passar o mouse */
  }
`;