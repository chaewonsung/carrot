import React from 'react';
import MarketPreviewHeader from '../common/MarketPreviewHeader';
import BuySellDetailGridBox from './BuySellDetailGridBox';
import { BuySellMarketItem } from '../buy-sell/BuySellMarketItemList';
import styled from 'styled-components';

const BuySellUserItemListSecBlock = styled.section`
  margin: 30px 0 50px;
`;

const BuySellUserItemListSec = () => {
  return (
    <BuySellUserItemListSecBlock>
      <MarketPreviewHeader heading="황채원 의 판매물품" />
      <BuySellUserItemList />
    </BuySellUserItemListSecBlock>
  );
};

const BuySellUserItemList = () => {
  return (
    <BuySellDetailGridBox>
      {[...Array(6)].map(() => (
        <BuySellMarketItem />
      ))}
    </BuySellDetailGridBox>
  );
};

BuySellUserItemListSec.style = BuySellUserItemListSecBlock;
export default BuySellUserItemListSec;
