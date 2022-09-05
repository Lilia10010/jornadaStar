import React from "react";

import { TbUserSearch } from "react-icons/tb";
import { Container, WrapperSearch, Input, Button } from "./styles";

interface InputProps {
  onSubmit: () => void;
  onChange: any;
}

const SearchInput = ({ onSubmit, onChange }: InputProps) => {
  return (
    <Container>
      <WrapperSearch>
        <TbUserSearch style={{ fontSize: "30px" }} />
        <Input type="number" placeholder="insira MGTL" onChange={onChange} />
        <Button onClick={onSubmit}>Calcular</Button>
      </WrapperSearch>
    </Container>
  );
};

export default SearchInput;
