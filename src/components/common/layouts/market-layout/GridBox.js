import React from 'react';
import styled from 'styled-components';

const GridBoxBlock = styled.div`
  display: grid;
  grid-template-columns: ${({ min }) =>
    `repeat(auto-fill, minmax(${min}, 1fr))`};
  gap: ${({ gap }) => gap};
`;

const GridBox = ({ children, ...props }) => {
  return <GridBoxBlock {...props}>{children}</GridBoxBlock>;
};

export default GridBox;
