import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  z-index: 1;
  ${({ $inset }) => Object.keys($inset).map((key) => `${key}: ${$inset[key]};`)};
`;

const FixedPortal = ({ children, ...props }) => {
  return ReactDOM.createPortal(
    <Wrapper {...props}>{children}</Wrapper>,
    document.getElementById('fixed-root')
  );
};

export default FixedPortal;
