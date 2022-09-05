import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 5px;
`;

export const Block = styled.div`
  border: 1px solid var(--color-primary);
  padding: 3px 5px;
  border-radius: var(--border-radius-primary);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scaleY(1.5);
  }
`;
