import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['fullWidth', 'fw', 'round'].includes(prop),
})`
  padding: 0.8em 1em;
  text-align: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : null)};
  font-weight: ${({ fw }) => fw || null};
  border-radius: ${({ round }) => (round ? '99px' : '3px')};
`;
const ButtonSymbol = styled(Button)`
  background-color: ${palette.carrot[0]};
  color: ${palette.carrot[6]};
  &:hover {
    background-color: ${palette.carrot[1]};
  }
`;
const ButtonGray = styled(Button)`
  background-color: ${palette.gray[3]};
`;

export const BtnSymbol = (props) => (
  <ButtonSymbol {...props}>{props.children}</ButtonSymbol>
);
export const BtnGray = (props) => (
  <ButtonGray {...props}>{props.children}</ButtonGray>
);
