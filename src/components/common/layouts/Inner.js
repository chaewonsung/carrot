import React from 'react';
import styled from 'styled-components';

const InnerBlock = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  @media screen and (max-width: 1144px) {
    padding: 0 20px;
  }
`;

const Inner = ({ children }) => {
  return <InnerBlock>{children}</InnerBlock>;
};

export default Inner;
