import React from 'react';
import MarketPreviewHeader from '../common/MarketPreviewHeader';
import { BuySellMarketItem } from '../buy-sell/BuySellMarketItemList';
import Inner from '../common/layouts/Inner';
import BuySellDetailGridBox from './BuySellDetailGridBox';
import styled from 'styled-components';
import BuySellUserItemListSec from './BuySellUserItemListSec';

const BuySellFavItemListSecBlock = styled(BuySellUserItemListSec.style)`
  margin-bottom: 100px;
`;

const BuySellFavItemListSec = () => {
  return (
    <BuySellFavItemListSecBlock>
      <Inner>
        <MarketPreviewHeader heading="인기매물" />
        <BuySellFavItemList />
      </Inner>
    </BuySellFavItemListSecBlock>
  );
};

const BuySellFavItemList = () => {
  return (
    <BuySellDetailGridBox>
      {[...Array(18)].map(() => (
        <BuySellMarketItem />
      ))}
    </BuySellDetailGridBox>
  );
};

export default BuySellFavItemListSec;
