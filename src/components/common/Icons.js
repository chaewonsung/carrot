import styled from 'styled-components';

const Icon = styled.i`
  font-size: ${({ $size }) => $size || null};
`;

export const IconArrowUpRight = (props) => (
  <Icon className="bi bi-arrow-up-right icon-arrow-up-right" {...props}></Icon>
);
export const IconSearch = (props) => (
  <Icon className="bi bi-search icon-search" {...props}></Icon>
);
export const IconMenu = (props) => (
  <Icon className="bi bi-list icon-menu" {...props}></Icon>
);
export const IconClose = (props) => (
  <Icon className="bi bi-x-lg icon-close" {...props}></Icon>
);
export const IconDropdown = (props) => (
  <Icon className="bi bi-chevron-down icon-dropdown" {...props}></Icon>
);
