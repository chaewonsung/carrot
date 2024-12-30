import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const Button = styled.button`
  padding: 0.55em 0.8em;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : null)};
  font-weight: ${({ $fw }) => $fw || null};
`;
const ButtonSymbol = styled(Button)`
  background-color: ${palette.carrot[0]};
  color: ${palette.carrot[6]};
  border-radius: 3px;
  &:hover {
    background-color: ${palette.carrot[1]};
  }
`;

export const BtnSymbol = (props) => (
  <ButtonSymbol {...props}>{props.children}</ButtonSymbol>
);
