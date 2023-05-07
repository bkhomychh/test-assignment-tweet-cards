import styled from 'styled-components';

export const List = styled.ul`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-auto-rows: auto;
  gap: 50px;
  justify-content: center;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (min-width: 1350px) {
    grid-template-columns: repeat(3, auto);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
