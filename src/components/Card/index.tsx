import { GiSpaceship } from "react-icons/gi";
import { Container, Name, Stops, Mglt } from "./styles";
interface CardProps {
  name: any;
  stops: any;
  mglt: any;
}
export const Card = ({ name, stops, mglt }: CardProps) => {
  const stop = Math.floor(stops);
  return (
    <Container>
      <GiSpaceship style={{ fontSize: 86 }} />
      <Name>{name}</Name>
      <Stops>
        <small>paradas: </small>
        {stop}
      </Stops>
      <Mglt>
        <small>MGLT: </small>
        {mglt}
      </Mglt>
    </Container>
  );
};
