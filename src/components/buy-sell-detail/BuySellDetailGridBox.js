import React from 'react';
import GridBox from '../common/layouts/market-layout/GridBox';
import styled from 'styled-components';
import { media } from '../../lib/styles/variables';

const BuySellDetailGridBoxBlock = styled(GridBox)`
  ${media('tablet')} {
    grid-template-columns: 1fr 1fr;
  }
`;

const BuySellDetailGridBox = ({ children }) => {
  return (
    <BuySellDetailGridBoxBlock gap="50px 15px" min="150px">
      {children}
    </BuySellDetailGridBoxBlock>
  );
};

export default BuySellDetailGridBox;
