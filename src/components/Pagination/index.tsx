import { Container, Block } from "./styles";

interface PaginationProps {
  totalPages: number;
  onClick?: () => void;
  pageClick?: any;
}

export const Pagination = ({ totalPages, pageClick }: PaginationProps) => {
  const handlepages = (totalPages: number) => {
    var elements = [];
    for (let i = 0; i < totalPages; i++) {
      elements.push(
        <Block onClick={() => pageClick(i + 1)} key={i}>
          {i + 1}
        </Block>
      );
    }
    return elements;
  };

  return <Container>{handlepages(totalPages)}</Container>;
};
