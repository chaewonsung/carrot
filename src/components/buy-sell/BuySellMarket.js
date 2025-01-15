import React from 'react';
import MarketLayout from '../common/layouts/market-layout/MarketLayout';
import BuySellFilter from './BuySellFilter';
import BuySellMarketItemList from './BuySellMarketItemList';

const BuySellMarket = () => {
  return (
    <MarketLayout
      path="중고거래"
      Filter={BuySellFilter}
      MarketItemList={BuySellMarketItemList}
    />
  );
};

export default BuySellMarket;
