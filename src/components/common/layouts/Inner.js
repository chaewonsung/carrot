import React from 'react';
import styled from 'styled-components';
import { mq } from '../../../lib/styles/variables';

const InnerBlock = styled.div`
  --inner-padding: 64px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--inner-padding);
  @media screen and (max-width: ${mq.laptop}px) {
    --inner-padding: 40px;
  }
  @media screen and (max-width: ${mq.tablet}px) {
    --inner-padding: 16px;
  }
`;

const Inner = ({ children }) => {
  return <InnerBlock className="inner">{children}</InnerBlock>;
};

export default Inner;
