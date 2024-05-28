import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 270px;
  height: auto;
  background-color: rgba(0, 0, 0, 0.2);
  margin-left: 20px;
  position: relative;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Name = styled.h3`
  font-size: 2rem;
  margin: 50px 0 20px;
  text-align: center;
`;

export const Number = styled.h4`
  font-size: 1rem;
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  padding: 5px 10px;
  border-radius: 20px;
`;

export const Image = styled.img`
  max-height: 120px;
  margin: 20px 0;
`;

export const Abilities = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
  overflow: hidden;
  margin-top: auto;
`;

export const AbilityItem = styled.h4`
  font-size: 1rem;
  text-align: center;
  background: white;
  padding: 5px 10px;
  border-radius: 5px;
`;
