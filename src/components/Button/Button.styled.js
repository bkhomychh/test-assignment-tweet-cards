import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 14px 0;
  min-width: ${({ thin }) => (thin ? '120px' : '196px')};
  width: max-content;
  display: flex;
  justify-content: center;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  background-color: ${({ active }) => (active ? '#5CD3A8' : '#EBD8FF')};
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #5cd3a8;
  }
`;
