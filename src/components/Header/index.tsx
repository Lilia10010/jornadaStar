import React from "react";
import { GiSpaceSuit } from "react-icons/gi";
import { Container, Title } from "./styles";

const Header = () => {
  return (
    <Container>
      <GiSpaceSuit size={50} />
      <Title>Qual a distância da sua jornada?</Title>
    </Container>
  );
};

export default Header;
